

# from django.shortcuts import render
from django.views.generic import TemplateView

# SignUp
from django.contrib import messages
from django.shortcuts import redirect

# models.py
from .models import *

class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        return context

class AddClientView(TemplateView):
    template_name = 'novo_cliente.html'

    def post(self, request):
        new_client = Hospede(
            cpf=request.POST['cpf'],
            nome=request.POST['name'],
            endereco=request.POST['address']
        )
        new_client.save()
        messages.success(request, "Cliente foi criado")
        return redirect("index")

class ClientView(TemplateView):
    template_name = 'exibir_clientes.html'

    def get_context_data(self, **kwargs):
        context = super(ClientView, self).get_context_data(**kwargs)
        context['clients'] = show_clients()
        return context