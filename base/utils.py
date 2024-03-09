# -*- coding: utf-8 -*-

import datetime
from django.core.mail import send_mail
from django.conf import settings
import after_response
import base64
import requests
import random
import os
from pathlib import Path
from django.utils.translation import gettext_lazy as _
from.sendpluse_email import send_sendpluse_email

BASE_DIR = Path(__file__).resolve().parent.parent


BG_COLORS_CHOICES = ["#f36422", "#ffee02", "#f070a9", "#00adef", "#7cc142", "#d02b49"]


def encrypt_int(value, key=1251):
    # Encrypt the value using XOR operation
    encrypted_value = int(key) ^ int(value)
    return encrypted_value


def decrypt_int(encrypted_value, key=1251):
    # Decrypt the value using XOR operation
    decrypted_value = int(key) ^ int(encrypted_value)
    return decrypted_value


def get_random_bg_color():
    return random.choice(BG_COLORS_CHOICES)


def date_from_string(date_string):
    """
        :param date_string: date string from the user request
        :return: return a date object if the string match "%d/%m/%Y" format else return None
    """
    try:
        return datetime.datetime.strptime(date_string, "%d/%m/%Y")
    except:
        return None

def get_currency_iso():
    return "504"

def get_currency():
    if get_currency_iso() == "504":
        return _('DH')
    return "$"


def send_mailgun(subject, message_txt, from_address, receivers, html_message=None):
    return requests.post(
        "https://api.mailgun.net/v3/" + settings.MAILGUN_DOMAIN_NAME + "/messages",
        auth=("api", settings.MAILGUN_APIKEY),
        data={
            "from": from_address,
            "to": receivers,
            "subject": subject,
            "text": message_txt,
            "html": html_message,
        }
    )


@after_response.enable
def send_email(subject, message_txt, list_emails, html_message=None):
    """
        :param subject: subject of the email
        :param message_txt: plain text of the email
        :param list_emails: list of receivers addresses of the of the email
        :param html_message: html_message of the email
        :return: None
    """
    if settings.EMAIL_SMTP_PROVIDER == "gmail":
        return send_mail(subject, message_txt, settings.EMAIL_FROM_ADDRESS, list_emails, html_message=html_message)
    elif settings.EMAIL_SMTP_PROVIDER == "sendgrid":
        return send_mail(subject, message_txt, settings.EMAIL_FROM_ADDRESS, list_emails, html_message=html_message)
    elif settings.EMAIL_SMTP_PROVIDER == "sendpluse":
        sender = {"name": settings.SITE_NAME, "email": settings.EMAIL_FROM_ADDRESS}
        return send_sendpluse_email(subject=subject, mail_from=sender, text_content=message_txt, html_content=html_message, recipients=list_emails)
    else:
        return "no_smtp_email_provider"


def check_file_exists(file_path):
    return os.path.exists(os.path.join(BASE_DIR, file_path))


def get_static_logo_url():
    """
        :return: the url of the website logo
    """
    return check_file_exists("/static/site_images/logo.jpg") and (settings.BACKEND_URL + "/static/site_images/logo.jpg")


def get_img_as_base64(url):
    """
        :param url: image url
        :return: convert the image url to base64 encode
    """
    return base64.b64encode(requests.get(url).content).decode('ascii')

