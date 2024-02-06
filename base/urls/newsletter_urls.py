from django.urls import path
from base.views import newsletter_views as views

urlpatterns = [

    path('create/', views.createNewsletter, name="newsletter-create"),

    path('unsubscribe/<str:email>/', views.unsubscribeEmail, name="unsubscribe"),
    path('reregister/<str:email>/', views.reregisterEmail, name="reregister"),
]
