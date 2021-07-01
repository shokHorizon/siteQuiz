from django import forms

from .models import Contact


class ContactForm(forms.ModelForm):
	class Meta:
		model = Contact
		fields = ['first_name', 'email', 'country', 'phone', 'whatsapp', 'viber', 'telegram']
