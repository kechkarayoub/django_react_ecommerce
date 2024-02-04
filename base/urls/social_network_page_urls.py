from django.urls import path
from base.views import social_network_page_views as views

urlpatterns = [

    path('', views.getSocialNetworkPages, name="products"),

]
