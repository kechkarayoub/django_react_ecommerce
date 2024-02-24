from django.db import models
from colorfield.fields import ColorField
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from .utils import encrypt_int, decrypt_int


class User(AbstractUser):
    class Meta:
        indexes = [
            models.Index(fields=['is_active']),
            models.Index(fields=['is_staff']),
            models.Index(fields=['is_superuser']),
            models.Index(fields=['username']),
            models.Index(fields=['first_name']),
            models.Index(fields=['last_name']),
            models.Index(fields=['email']),
        ]
    language = models.TextField(max_length=10, default="fr", choices=settings.LANGUAGES, db_index=True)


# Create your models here.


class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True, db_index=True)
    image = models.ImageField(null=True, blank=True, default='')
    brand = models.CharField(max_length=200, null=True, blank=True, db_index=True)
    category = models.CharField(max_length=200, null=True, blank=True, db_index=True)
    description = models.TextField(null=True, blank=True)
    is_active = models.BooleanField(db_index=True, default=True)
    rating = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True, db_index=True)
    numReviews = models.IntegerField(null=True, blank=True, default=0, db_index=True)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True, db_index=True)
    countInStock = models.IntegerField(null=True, blank=True, default=0, db_index=True)
    createdAt = models.DateTimeField(auto_now_add=True, db_index=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name

    def to_newsletter_dict(self):
        image_url = self.image and self.image.url
        if not image_url:
            image_url = "/static/site_images/no_image.png"
        else:
            image_url = "/static" + image_url
        return {
            "price": self.price,
            "category": self.category,
            "brand": self.brand,
            "name": self.name,
            "image": settings.BACKEND_URL + image_url,
            "url": settings.FRONT_URL + "/product/" + str(self._id)
        }


class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0, db_index=True)
    comment = models.TextField(null=True, blank=True)
    is_active = models.BooleanField(db_index=True, default=True)
    createdAt = models.DateTimeField(auto_now_add=True, db_index=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.rating)


class Newsletter(models.Model):
    email = models.EmailField(null=False, db_index=True, unique=True)
    name = models.CharField(max_length=200, null=False, db_index=True)
    is_active = models.BooleanField(default=True, db_index=True)
    createdAt = models.DateTimeField(auto_now_add=True, db_index=True)
    language = models.CharField(max_length=10, default="fr", choices=settings.LANGUAGES, db_index=True)

    def __str__(self):
        return str(self.email)


class Order(models.Model):

    STATUS_CHOICES = (
        ('PENDING', 'Pending'),
        ('PROCESSING', 'Processing'),
        ('COMPLETED', 'Completed'),
        ('CANCELLED', 'Cancelled'),
    )

    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    paymentMethod = models.CharField(max_length=200, null=True, blank=True, db_index=True)
    taxPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    shippingPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    totalPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    isPaid = models.BooleanField(default=False, db_index=True)
    paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True, db_index=True)
    isDelivered = models.BooleanField(default=False, db_index=True)
    deliveredAt = models.DateTimeField(
        auto_now_add=False, null=True, blank=True, db_index=True)
    createdAt = models.DateTimeField(auto_now_add=True, db_index=True)
    is_active = models.BooleanField(db_index=True, default=True)
    _id = models.AutoField(primary_key=True, editable=False)
    # cmi attributes
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='PENDING', db_index=True)
    traited = models.BooleanField(default=False, db_index=True)
    transaction_code = models.CharField(max_length=255, db_index=True, default="")
    transaction_id = models.CharField(max_length=255, db_index=True, default="")
    mdStatus = models.CharField(max_length=255, db_index=True, default="")
    payment_verification_from_user_navigator = models.BooleanField(db_index=True, default=False)

    def __str__(self):
        return str(self.createdAt)

    @property
    def crypted_id(self):
        return self.crypt_id()

    def crypt_id(self):
        id_ = self._id
        crypted_id = encrypt_int(id_, key=1251)
        return crypted_id

    @classmethod
    def decrypt_id(cls, crypted_id):
        id_ = decrypt_int(crypted_id, key=1251)
        try:
            return int(id_)
        except:
            return id_


class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True, db_index=True)
    qty = models.IntegerField(null=True, blank=True, default=0, db_index=True)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True, db_index=True)
    image = models.CharField(max_length=200, null=True, blank=True)
    is_active = models.BooleanField(db_index=True, default=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)


class ShippingAddress(models.Model):
    order = models.OneToOneField(
        Order, on_delete=models.CASCADE, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    postalCode = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    shippingPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)
    is_active = models.BooleanField(db_index=True, default=True)

    def __str__(self):
        return str(self.address)


class SocialNetworkPage(models.Model):
    name = models.CharField(max_length=255)
    url = models.URLField()
    icon_url = models.URLField(blank=True, null=True)
    font_icon = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    color = ColorField(default='#FFFFFF')

    def __str__(self):
        return self.name

    def to_newsletter_dict(self):
        return {
            "name": self.name,
            "url": self.url,
            "font_icon": self.font_icon,
        }
