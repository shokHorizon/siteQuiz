from django.db import models


class Contact(models.Model):
	first_name = models.CharField(max_length=50)
	email = models.EmailField()
	country = models.CharField(max_length=40)
	phone = models.CharField(max_length=40)
	whatsapp = models.BooleanField(default=False)
	viber = models.BooleanField(default=False)
	telegram = models.BooleanField(default=False)
 