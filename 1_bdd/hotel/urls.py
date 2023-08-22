

from django.urls import path
from .views import *

# path('nome da url no template', chamada da view, nome da url na chamado do template)

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('novo-cliente', AddClientView.as_view(), name='novo-cliente'),
    path('exibir-clientes', ClientView.as_view(), name='exibir-clientes'),
]
