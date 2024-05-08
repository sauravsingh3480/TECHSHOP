from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product, UserAddress

from rest_framework_simplejwt.tokens import RefreshToken

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id','_id','username','email','name','isAdmin']
        
    def get_name(self,obj):
            name = obj.first_name
            if name == '':
                name = obj.email

            return name    

    def get__id(self,obj):
         _id = obj.id
         return _id

    def get_isAdmin(self,obj):
         isAdmin = obj.is_staff
         return isAdmin    
    
class  UserSerializerWithToken(UserSerializer):
     token = serializers.SerializerMethodField(read_only=True)
     class Meta:
        model = User
        fields = ['id','_id','username','email','name','isAdmin','token']  

     def get_token(sefl,obj):
        token = RefreshToken.for_user(obj) 
        return str(token.access_token)
    
class UserAdderessSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAddress
        fields = '__all__'    