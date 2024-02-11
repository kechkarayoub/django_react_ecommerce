from rest_framework.decorators import api_view
from rest_framework.response import Response
from base.models import Newsletter
from base.serializers import NewsletterSerializer
from rest_framework import status
from django.utils.translation import gettext_lazy as _


@api_view(['POST'])
def createNewsletter(request):
    data = request.data

    newsletter = Newsletter.objects.filter(email=data["email"]).first()
    if newsletter:
        newsletter.name = data["name"]
        newsletter.language = data["language"]
    if newsletter and newsletter.is_active:
        newsletter.save()
        content = {'detail': _('You are already subscribed')}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)
    elif newsletter:
        newsletter.is_active = True
        newsletter.save()
    else:
        newsletter = Newsletter.objects.create(name=data["name"], email=data["email"], language=data["language"])

    newsletter.save()

    serializer = NewsletterSerializer(newsletter, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
def unsubscribeEmail(request, email):
    if Newsletter.objects.filter(email=email, is_active=True).update(is_active=False):
        return Response(_('Unsubscribe successful'))
    else:
        content = {'detail': _('You are already subscribed')}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def reregisterEmail(request, email):
    Newsletter.objects.filter(email=email).update(is_active=True)
    return Response(_('Re-registration successful'))

