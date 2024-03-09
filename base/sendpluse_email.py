from django.conf import settings
from pysendpulse.pysendpulse import PySendPulse
import base64


def send_sendpluse_email(subject, mail_from, text_content, html_content, recipients):
    SPApiProxy = PySendPulse(settings.SENDPLUSE_REST_API_ID, settings.SENDPLUSE_REST_API_SECRET, settings.SENDPLUSE_TOKEN_STORAGE, memcached_host=settings.SENDPLUSE_MEMCACHED_HOST)
    # Convert HTML content to bytes
    html_bytes = html_content.encode('utf-8')
    # Encode HTML content to Base64
    base64_encoded_html = base64.b64encode(html_bytes)
    # Send mail using SMTP
    email = {
        'subject': subject,
        'html': html_content,
        'text': text_content,
        'from': mail_from,
        'to': recipients,
        'bcc': [
            # {'name': 'Richard Roe', 'email': 'richard.roe@domain.com'}
        ]
    }
    response = SPApiProxy.smtp_send_mail(email)
    return response




