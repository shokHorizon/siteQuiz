from django.shortcuts import render

from . import forms
from . import models

def index(request):
	context = {}
	return render(request, "index.html", context)

def chat(request):
	context = {}
	return render(request, "chat.html", context)

def sign(request):
	if request.method == 'POST':
		form = forms.ContactForm(request.POST)
		if form.is_valid():
			form.save()
	context = {}
	return render(request, "chat.html", context)
