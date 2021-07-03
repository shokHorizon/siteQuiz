from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt


from . import forms
from . import models

def index(request):
	context = {}
	return render(request, "index.html", context)

def chat(request):
	context = {}
	return render(request, "chat.html", context)

def vplayer(request):
	context = {
		'file' : request.GET.get('file')
	}
	return render(request, "player.html", context)

@csrf_exempt
def contact(request):
	if request.method == 'POST':
		form = models.Contact.create()
  
		if form.is_valid():
			form.save()
	context = {}
	return render(request, "chat.html", context)

