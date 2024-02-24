from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Product, Order, OrderItem, ShippingAddress
from base.serializers import OrderSerializer

from rest_framework import status
from datetime import datetime
from django.http import HttpResponse
from django.utils.translation import gettext_lazy as _


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addOrderItems(request):
    user = request.user
    data = request.data

    orderItems = data['orderItems']

    if orderItems and len(orderItems) == 0:
        return Response({'detail': _('No Order Items')}, status=status.HTTP_400_BAD_REQUEST)
    else:

        # (1) Create order

        order = Order.objects.create(
            user=user,
            paymentMethod=data['paymentMethod'],
            taxPrice=data['taxPrice'],
            shippingPrice=data['shippingPrice'],
            totalPrice=data['totalPrice']
        )

        # (2) Create shipping address

        shipping = ShippingAddress.objects.create(
            order=order,
            address=data['shippingAddress']['address'],
            city=data['shippingAddress']['city'],
            postalCode=data['shippingAddress']['postalCode'],
            country=data['shippingAddress']['country'],
        )

        # (3) Create order items adn set order to orderItem relationship
        for i in orderItems:
            product = Product.objects.get(_id=i['product'])

            item = OrderItem.objects.create(
                product=product,
                order=order,
                name=product.name,
                qty=i['qty'],
                price=i['price'],
                image=product.image.url,
            )

            # (4) Update stock

            product.countInStock -= item.qty
            product.save()

        serializer = OrderSerializer(order, many=False)
        return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyOrders(request):
    user = request.user
    orders = user.order_set.filter(is_active=True)
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getOrders(request):
    orders = Order.objects.filter(is_active=True)
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOrderById(request, pk):

    user = request.user

    try:
        order = Order.objects.get(_id=pk)
        if user.is_staff or order.user == user:
            serializer = OrderSerializer(order, many=False)
            return Response(serializer.data)
        else:
            Response({'detail': _('Not authorized to view this order')},
                     status=status.HTTP_400_BAD_REQUEST)
    except:
        return Response({'detail': _('Order does not exist')}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateOrderToPaid(request, pk):
    order = Order.objects.get(_id=pk)

    order.isPaid = True
    order.paidAt = datetime.now()
    order.save()

    return Response(_('Order was paid'))


@api_view(['GET', 'POST', 'PUT'])
def cmi_callback_api(request):
    if request.method == "GET":
        data = request.data or request.GET
    else:
        data = request.POST

    user = request.user

    # logger.debug('******************************************************************************************')
    # logger.info('Received data:')
    # logger.info(data)
    from_user_navigator = data.get("from_user_navigator") in [True, 'true']
    action = data.get("action")
    if not from_user_navigator or action == "payment_result" and from_user_navigator:
        pass
    else:
        return Response(_('You are not allowed to execute this action'))
    order_id = data.get("oid")
    order_id = Order.decrypt_id(order_id)
    transaction_id = data.get("TRANID") or ""
    amount = data.get("amount")
    transaction_code = data.get("ProcReturnCode") or ""
    mdStatus = data.get("mdStatus") or ""
    order = Order.objects.filter(pk=order_id, traited=False).first()

    order.payment_verification_from_user_navigator = from_user_navigator
    order.traited = True
    order.transaction_id = transaction_id
    order.transaction_code = transaction_code
    order.mdStatus = mdStatus
    if order and transaction_code == '00' and float(order.total) == float(amount):
        order.isPaid = True
        order.paidAt = datetime.now()
    elif order and transaction_code != '00':
        pass
    order.save()
    if from_user_navigator:
        if order:
            if user.is_staff or order.user == user:
                serializer = OrderSerializer(order, many=False)
                return Response(serializer.data)
            else:
                Response({'detail': _('Not authorized to view this order')}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'detail': _('Order does not exist')}, status=status.HTTP_400_BAD_REQUEST)
    elif order and transaction_code == '00' and float(order.total) == float(amount):
        return HttpResponse("ACTION=POSTAUTH")
    elif order and transaction_code != '00':
        return HttpResponse("ACTION=APPROVED")
    return HttpResponse("ACTION=FAILURE")


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateOrderToDelivered(request, pk):
    order = Order.objects.get(_id=pk)

    order.isDelivered = True
    order.deliveredAt = datetime.now()
    order.save()

    return Response(_('Order was delivered'))
