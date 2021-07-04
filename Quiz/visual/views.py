from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
import json



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
		data = json.loads(request.body)
		data.pop('phone_prefix')
		form = models.Contact.objects.create(**data)
		form.save()
		data['telegram'] = 'telegram' * int(data['telegram'])
		data['whatsapp'] = 'whatsapp' * int(data['whatsapp'])
		data['viber'] = 'viber' * int(data['viber'])
		text = "\n".join([i for i in data.values()])
		send_mail(
			'Заявка!',
			text,
			'myworkonline@internet.ru',
			['kostan0008@gmail.com'],
			fail_silently=False,
		)
	context = {}
	return render(request, "chat.html", context)

