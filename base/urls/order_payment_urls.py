from django.urls import path
from base.views import order_payment_views as views


urlpatterns = [
    path('cmi_callback_api/', views.cmi_callback_api, name='cmi_callback_api'),
]
