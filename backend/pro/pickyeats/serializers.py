from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# create your pickyeats serializers here

class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        user = User(
            username = validated_data['username'],
            email = validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
    

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # You can add custom claims here
        token['username'] = user.username
        token['is_superuser'] = user.is_superuser
        token['is_active'] = user.is_active

        return token

    def validate(self, attrs):
        data = super().validate(attrs)

        # Add extra info to response
        data['is_superuser'] = self.user.is_superuser
        data['is_active'] = self.user.is_active
        data['username'] = self.user.username

        return data
    
    
class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username','first_name','last_name','email']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


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


class ProductSerializer(serializers.ModelSerializer):
    pid = serializers.CharField(read_only=True, required=False)
    class Meta:
        model = Product
        fields = '__all__'


class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    product_id = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all(),
        source='product',
        write_only=True
    )

    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'product_id', 'quantity', 'price_at_purchase', 'subtotal']
        read_only_fields = ['subtotal']


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)
    user = UserSerializer(read_only=True)
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='user',
        write_only=True
    )

    class Meta:
        model = Order
        fields = ['id', 'oid', 'user', 'user_id', 'status', 'order_date', 'total_amount', 'items']
        read_only_fields = ['oid', 'order_date', 'total_amount']

    def create(self, validated_data):
        items_data = validated_data.pop('items')
        order = Order.objects.create(**validated_data)

        total = 0
        for item_data in items_data:
            product = item_data['product']
            quantity = item_data['quantity']
            price = item_data['price_at_purchase']

            OrderItem.objects.create(order=order, product=product, quantity=quantity, price_at_purchase=price)
            total += quantity * price

        order.total_amount = total
        order.save()
        return order