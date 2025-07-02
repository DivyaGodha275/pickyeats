from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator
import re

# Create your models here.

class Address(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    phno = models.CharField(max_length=10, validators=[RegexValidator(regex='^\d{10}$', message='Phone number must be 10 digits')])
    door_no = models.CharField(max_length=10)
    building = models.CharField(max_length=50)
    area = models.CharField(max_length=50)
    landmark = models.CharField(max_length=50)
    city = models.CharField(max_length=30)
    pin_code = models.CharField(max_length=6)

    def __str__(self):
        return f"{self.user.username} - {self.city}, {self.pin_code}"



class Product(models.Model):
    CATEGORY_CHOICES = [
        ('imported','Imported'),
        ('local','Local'),
        ('dry_fruits','Dry Fruits')
    ]
    pid = models.CharField(max_length=10, unique=True)
    pname = models.CharField(max_length=40)
    image = models.ImageField(upload_to='product_images/', null=True, blank=True)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    quantity = models.DecimalField(max_digits=5,decimal_places=2)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)

    def save(self, *args, **kwargs):
        if not self.pid:
            last_entry = Product.objects.order_by('-id').first()
            if last_entry and last_entry.pid:
                match = re.search(r'\d+', last_entry.pid)
                last_number = int(match.group()) + 1 if match else 1
            else:
                last_number = 1
            self.pid = f"P{last_number:03d}"
        super().save(*args, **kwargs)

    def __str__(self):
        return self.pname