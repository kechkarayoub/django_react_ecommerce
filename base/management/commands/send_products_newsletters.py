# custom_command.py
from django.core.management.base import BaseCommand
from base.views.product_views import projects_newsletter


class Command(BaseCommand):
    help = 'this command is used to send newsletters to subscribed emails'

    def handle(self, *args, **options):
        print("Begin sending newsletters")
        projects_newsletter()
        print("End sending newsletters")
