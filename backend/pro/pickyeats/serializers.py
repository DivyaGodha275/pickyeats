from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User

# create your pickyeats serializers here

class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True)

    class Meta:
        model = User
        fields = ['username','password']

    def create(self, validated_data):
        user = User(
            username = validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
    
    
class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username','first_name','last_name','email']
        

class AddressSerializer(serializers.ModelSerializer):
    phno = serializers.CharField(required=True, allow_null=False, allow_blank=False,
                                 error_messages={
                                     'required':'Phone Number is required',
                                     'blank':'Phone number cannot be blank',
                                     'null':'Phone number cannot be null',
                                     })
    door_no = serializers.CharField(required=True, allow_null=False, allow_blank=False,
                                 error_messages={
                                     'required':'Door Number is required',
                                     'blank':'Door number cannot be blank',
                                     'null':'Door number cannot be null',
                                     })
    building = serializers.CharField(required = False, allow_null=True, allow_blank=True)
    area = serializers.CharField(required=True, allow_null=False, allow_blank=False,
                                 error_messages={
                                     'required':'Area is required',
                                     'blank':'Area cannot be blank',
                                     'null':'Area cannot be null',
                                     })
    landmark = serializers.CharField(required = False, allow_null=True, allow_blank=True)
    city = serializers.CharField(required=True, allow_null=False, allow_blank=False,
                                 error_messages={
                                     'required':'City is required',
                                     'blank':'City cannot be blank',
                                     'null':'City cannot be null',
                                     })
    pin_code = serializers.CharField(required=True, allow_null=False, allow_blank=False,
                                 error_messages={
                                     'required':'Pin Code is required',
                                     'blank':'Pin Code cannot be blank',
                                     'null':'Pin Code cannot be null',
                                     })
    
    class Meta:
        model = Address
        fields = '__all__'