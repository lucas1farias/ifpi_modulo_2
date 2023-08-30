

# from django.shortcuts import render
from django.contrib import messages
from django.shortcuts import redirect
from django.views.generic import TemplateView

# SignUp
from django.contrib import messages
from django.shortcuts import redirect

# models.py
from .models import *
from .models import *

class IndexView(TemplateView):
    template_name = "index.html"

    def post(self, request):
        new_client_amount = request.POST.get("client-amount")

        if new_client_amount is not None:
            for i in range(int(new_client_amount)):
                create_person_object()
        
        messages.success(request, f"{new_client_amount} novos hospedes foram registrados")
        return redirect("index")

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
        context["amount_clients"] = show_clients_dtb_size()
        context['clients'] = show_clients()
        return context
    
# Eu estou tentando criar um objeto via formulário, mas estou recebendo o seguinte erro
# django.utils.datastructures.MultiValueDictKeyError: 'client-amount'
# Vou lhe mostrar em sequência, meu html e a view que faz parte do formulário