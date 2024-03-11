from rest_framework.decorators import api_view
from rest_framework.response import Response
from base.models import SocialNetworkPage
from base.serializers import SocialNetworkPageSerializer
from django.utils.translation import gettext_lazy as _


@api_view(['GET'])
def getSocialNetworkPages(request):

    social_network_pages = SocialNetworkPage.objects.filter().exclude(icon_url__isnull=True).exclude(icon_url="").order_by('name')

    serializer = SocialNetworkPageSerializer(social_network_pages, many=True)
    return Response({'social_network_pages': serializer.data})
