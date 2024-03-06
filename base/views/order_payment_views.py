from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

from rest_framework.response import Response

from base.models import Order
from base.serializers import OrderSerializer

from rest_framework import status
from datetime import datetime
from django.http import HttpResponse
from django.utils.translation import gettext_lazy as _
from django.utils import timezone


@api_view(['PUT', 'POST'])
@permission_classes([AllowAny])
def cmi_callback_api(request):
    if request.method == "GET":
        data = request.data or request.GET
    else:
        data = request.data or request.POST

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
    order_id = data.get("oid") or data.get("order_id")
    order_id = Order.decrypt_id(order_id)
    transaction_id = data.get("TRANID") or ""
    amount = data.get("amount")
    transaction_code = data.get("ProcReturnCode") or ""
    mdStatus = data.get("mdStatus") or ""
    order = Order.objects.filter(pk=order_id).exclude(transaction_code='00').first()

    if not order:
        Response({'detail': _('Order not exists or already traited')}, status=status.HTTP_400_BAD_REQUEST)

    order.payment_verification_from_user_navigator = from_user_navigator
    order.traited = True
    order.transaction_id = transaction_id
    order.transaction_code = transaction_code
    order.mdStatus = mdStatus
    if order and transaction_code == '00' and float(order.totalPrice) == float(amount):
        order.isPaid = True
        order.paidAt = timezone.now()
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
