from django.shortcuts import render

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
