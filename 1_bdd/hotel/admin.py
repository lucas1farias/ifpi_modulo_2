

from django.contrib import admin
from .models import *

@admin.register(Hospede)
class NomeModeloAdmin(admin.ModelAdmin):
    list_display = ("nome", "cpf", "endereco")
