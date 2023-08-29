

from django.contrib import admin
from .models import *

@admin.register(Hospede)
class HospedeAdmin(admin.ModelAdmin):
    list_display = ("nome", "cpf", "endereco")

@admin.register(CategoriaApt)
class CategoriaAptAdmin(admin.ModelAdmin):
    list_display = ("nome", "descricao", "diaria")

@admin.register(Apartamento)
class ApartamentoAdmin(admin.ModelAdmin):
    list_display = ("num", "id_cat_apt", "livre")

@admin.register(Hospedagem)
class HospedagemAdmin(admin.ModelAdmin):
    list_display = ("ent", "saida", "id_cliente", "id_apt", "diaria", "livre")
