from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
# Create your models here.

class Product(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    user = models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    name = models.CharField(max_length=200)
    image = models.ImageField(null=True,blank=True)
    brand = models.CharField(max_length=40)
    category = models.CharField(max_length=100)
    description = models.TextField(null=True,blank=True)
    rating = models.FloatField(default=1.0 ,validators = [MinValueValidator(1.0),MaxValueValidator(5.0)])
    numReview = models.BigIntegerField(default=0, null=True, blank=True)
    price = models.IntegerField(default=0)
    discPrice = models.IntegerField(default=0,null=True,blank=True)
    deliveryDays = models.IntegerField(default=5)
    countInStock = models.IntegerField(default=0, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
    
class UserAddress(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    user = models.ForeignKey(User,on_delete=models.CASCADE,related_name='addresses')
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    postalCode = models.IntegerField()
    country = models.CharField(max_length=20)
    Number=models.CharField(max_length=12)
    isDefault = models.BooleanField(default=False)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.city


class Review(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    user =models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    name = models.CharField(max_length=100,null=True,blank=True)
    rating = models.IntegerField(default=0,validators=[])
    comment = models.TextField(null=True,blank=True)

    def __str__(self):
        return str(self.rating)

class Order(models.Model):
     _id = models.AutoField(primary_key=True, editable=False)
     user =models.ForeignKey(User,on_delete=models.SET_NULL,null=True) 
     createdAt = models.DateTimeField(auto_now_add=True)
     paymentMethod = models.CharField(max_length=20)
     taxPrice = models.DecimalField(max_digits=7,decimal_places=2,null=True,blank=True)
     shippingPrice = models.DecimalField(max_digits=7,decimal_places=2,null=True,blank=True)
     totalPrice = models.DecimalField(max_digits=7,decimal_places=2)
     isPaid = models.BooleanField(default=False)
     paidAt = models.DateTimeField(auto_now_add=False,null=True,blank=True)
     isDelivered = models.BooleanField(default=False)
     deliveredAt = models.DateTimeField(auto_now_add=False,null=True,blank=True)
    
     def __str__(self):
         return str(self.createdAt) 
    
class OrderItem(models.Model):
     product =models.ForeignKey(Product,on_delete=models.SET_NULL,null=True) 
     order =models.ForeignKey(Order,on_delete=models.SET_NULL,null=True) 
     name = models.CharField(max_length=200,null=True,blank=True)
     qty = models.IntegerField(default=0, null=True,blank=True)
     price = models.DecimalField(max_digits=7,decimal_places=2,null=True,blank=True)
     image = models.CharField(max_length=200,null=True,blank=True)
     _id = models.AutoField(primary_key=True, editable=False)

     def __str__(self):
         return str(self.name)
     
class ShippingAddress(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    postalCode = models.IntegerField()
    country = models.CharField(max_length=20)
    Number=models.CharField(max_length=12,null=True)
    ShippingPrice = models.DecimalField(max_digits=7,decimal_places=2,null=True,blank=True) 

    def __str__(self):
        return self.address