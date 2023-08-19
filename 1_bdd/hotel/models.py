

from django.db import models

class Hospede(models.Model):
    cpf = models.CharField("Cpf", max_length=14)
    nome = models.CharField("Nome", max_length=20)
    endereco = models.TextField("Endereço", max_length=100)

    
    def __str__(self):
            return self.nome

    class Meta:
        verbose_name = 'Hospede'
        verbose_name_plural = verbose_name + 's'

class CategoriaApt(models.Model):
    categoria = models.CharField("Categoria", max_length=7)
    descricao = models.TextField("Descrição", max_length=100)
    diaria = models.DecimalField("Valor da diária", max_digits=5, decimal_places=2)

class Apartamento(models.Model):
    num = models.IntegerField("Número do apt.")
    id_cat_apt = models.ForeignKey(CategoriaApt, on_delete=models.CASCADE, related_name="apartamento")

class Hospedagem(models.Model):
    ent = models.DateField("Data de entrada", auto_now_add=True)
    saida = models.DateField("Data de entrada", auto_now=True)
    id_cliente = models.ForeignKey(Hospede, on_delete=models.CASCADE, related_name="hospedagem")
    id_apt = models.ForeignKey(Apartamento, on_delete=models.CASCADE, related_name="hospedagem")
    id_diaria = models.ForeignKey(CategoriaApt, on_delete=models.CASCADE, related_name="hospedagem")
