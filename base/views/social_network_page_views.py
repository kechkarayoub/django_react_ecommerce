from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from base.models import SocialNetworkPage
from base.serializers import SocialNetworkPageSerializer


@api_view(['GET'])
def getSocialNetworkPages(request):

    social_network_pages = SocialNetworkPage.objects.filter().order_by('name')

    serializer = SocialNetworkPageSerializer(social_network_pages, many=True)
    return Response({'social_network_pages': serializer.data})
