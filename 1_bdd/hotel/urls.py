

from django.urls import path
from .views import *

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('novo-cliente', AddClientView.as_view(), name='novo-cliente'),
    path('exibir-clientes', ClientView.as_view(), name='exibir-clientes'),
]
