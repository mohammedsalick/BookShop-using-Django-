from django.db import models

class Book(models.Model):
    name =models.CharField(max_length=255)
    price=models.FloatField()
    quantity =models.IntegerField()
    image =models.ImageField(upload_to='image' ,blank=True,null=True)