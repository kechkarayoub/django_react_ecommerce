from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
import after_response
from base.models import Product, Review, Newsletter, SocialNetworkPage
from base.serializers import ProductSerializer
from django.utils import timezone

from django.conf import settings
from django.template.loader import render_to_string
from django.utils.translation import activate, gettext_lazy as _
from ..utils import send_email, get_img_as_base64, get_static_logo_url, get_currency
from rest_framework import status
import datetime


@after_response.enable
def projects_newsletter():
    """
        :return: None
    """
    social_network_pages = [snp.to_newsletter_dict() for snp in SocialNetworkPage.objects.filter()]
    date_to_compare = timezone.now() - datetime.timedelta(days=7)
    products_ = Product.objects.filter(is_active=True, createdAt__gte=date_to_compare).order_by("-createdAt")[:5]
    products = []
    for product in products_:
        products.append(product.to_newsletter_dict())
    if not products:
        return
    for language in Newsletter.objects.filter(is_active=True).values_list("language", flat=True).distinct():
        activate(language)
        emails = list(Newsletter.objects.filter(is_active=True, language=language).values_list("email", flat=True).distinct())
        email_subject = _("New products {site_name}").format(site_name=settings.SITE_NAME)
        context = {
            "direction": "rtl" if language == "ar" else "ltr",
            "products": products,
            "currency": _(get_currency()),
            "logo_url": get_static_logo_url(),
            "site_name": settings.SITE_NAME,
            "site_url": settings.FRONT_URL,
            "ACTIVATE_SOCIAL_NETWORK_PAGES": settings.ACTIVATE_SOCIAL_NETWORK_PAGES,
            "SHOW_UNSUBSCRIBE_LINK_ON_EMAILS": settings.SHOW_UNSUBSCRIBE_LINK_ON_EMAILS,
            "subject": email_subject,
            "social_network_pages": social_network_pages,
            "unsubscribe_url": settings.FRONT_URL + "/unsubscribe_from_newsletter",
        }
        email_message_txt = render_to_string('emails/products_newsletter.txt', context)
        email_message_html = render_to_string('emails/products_newsletter.html', context)
        print(email_message_html.replace("</b>", ""))
        # email_message_txt_html = email_message_html.split('main>')[1][:-2].replace("<b>", "").replace("</b>", "")
        # email_message_txt = html2text.html2text(email_message_txt_html)
        """
            For localhost; execute this code in navigator server to show images in email client:
                var images = document.querySelectorAll("img");
                for(var i=0; i<images.length; i++) {
                    console.log(images[i].src);
                    images[i].src=images[i].src.replace(/^https:\/\/[a-zA-Z0-9.\/\-=_]+#/,'');
                }
        """
        response = send_email(email_subject, email_message_txt, emails, html_message=email_message_html)
        if response == "no_smtp_email_provider":
            print('You should configure a smtp email provider')

@api_view(['GET'])
def getProducts(request):
    query = request.query_params.get('keyword')
    if query == None:
        query = ''

    products = Product.objects.filter(
        is_active=True, name__icontains=query).order_by('-createdAt')

    page = request.query_params.get('page')
    paginator = Paginator(products, 5)

    try:
        products = paginator.page(page)
    except PageNotAnInteger:
        products = paginator.page(1)
    except EmptyPage:
        products = paginator.page(paginator.num_pages)

    if page == None:
        page = 1

    page = int(page)
    print('Page:', page)
    serializer = ProductSerializer(products, many=True)
    return Response({'products': serializer.data, 'page': page, 'pages': paginator.num_pages})


@api_view(['GET'])
def getTopProducts(request):
    products = Product.objects.filter(is_active=True, rating__gte=4).order_by('-rating')[0:5]
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createProduct(request):
    user = request.user

    product = Product.objects.create(
        user=user,
        name='',
        price=0,
        brand='',
        countInStock=0,
        category='y',
        description=''
    )

    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateProduct(request, pk):
    data = request.data
    product = Product.objects.get(_id=pk)

    product.name = data['name']
    product.price = data['price']
    product.brand = data['brand']
    product.countInStock = data['countInStock']
    product.category = data['category']
    product.description = data['description']

    product.save()

    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteProduct(request, pk):
    Product.objects.filter(_id=pk).update(is_active=False)
    return Response('Producted Deleted')


@api_view(['POST'])
def uploadImage(request):
    data = request.data

    product_id = data['product_id']
    product = Product.objects.get(_id=product_id)

    product.image = request.FILES.get('image')
    product.save()
    serializer = ProductSerializer(product, many=False)

    return Response({'image': serializer.data.get('image'), 'message': 'Image was uploaded'})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createProductReview(request, pk):
    user = request.user
    product = Product.objects.get(_id=pk)
    data = request.data

    # 1 - Review already exists
    alreadyExists = product.review_set.filter(user=user, is_active=True).exists()
    if alreadyExists:
        content = {'detail': 'Product already reviewed'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    # 2 - No Rating or 0
    elif data['rating'] == 0:
        content = {'detail': 'Please select a rating'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    # 3 - Create review
    else:
        review = Review.objects.create(
            user=user,
            product=product,
            name=user.first_name,
            rating=data['rating'],
            comment=data['comment'],
        )

        reviews = product.review_set.filter(is_active=True)
        product.numReviews = len(reviews)

        total = 0
        for i in reviews:
            total += i.rating

        product.rating = total / len(reviews)
        product.save()

        return Response('Review Added')
