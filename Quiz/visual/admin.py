from django.contrib import admin

from .models import Contact

class ContactAdmin(admin.ModelAdmin):
    list_display = ("first_name", "email", "country", "phone", "whatsapp", 'viber', 'telegram')
    search_fields = ("first_name", )
    list_filter = ("first_name", )
    empty_value_display = "-пусто-"
    

admin.site.register(Contact, ContactAdmin)
