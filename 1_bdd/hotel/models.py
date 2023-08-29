

from django.db import models
from math import floor
from random import random

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
    DIARIAS = (
        ('1', '400'),
        ('2', '700'),
        ('3', '900'),
        ('4', '1200'),
        ('5', '1400'),
    )
    nome = models.CharField("Categoria", max_length=7)
    descricao = models.TextField("Descrição", max_length=100)
    diaria = models.CharField("Valor da diária da categoria", max_length=1, choices=DIARIAS)

    def __str__(self):
            return self.nome

    class Meta:
        verbose_name = 'Categoria do Apartamento'
        verbose_name_plural = 'Categorias dos Apartamentos'

class Apartamento(models.Model):
    num = models.IntegerField("Número do apt.")
    id_cat_apt = models.ForeignKey(CategoriaApt, on_delete=models.CASCADE, related_name="apartamento")
    livre = models.BooleanField("Disponível")

    def __str__(self):
            return self.num

    class Meta:
        verbose_name = 'Apartamento'
        verbose_name_plural = verbose_name + 's'

class Hospedagem(models.Model):
    # APT_STATUS = (
    #     ('1', 'ocupado'),
    #     ('0', 'livre')
    # )

    ent = models.DateField("Data de entrada", auto_now_add=True)
    saida = models.DateField("Data de entrada", auto_now=True)
    id_cliente = models.ForeignKey(Hospede, on_delete=models.CASCADE, related_name="hospedagem")
    id_apt = models.ForeignKey(Apartamento, on_delete=models.CASCADE, related_name="hospedagem")
    # id_diaria = models.ForeignKey(CategoriaApt, on_delete=models.CASCADE, related_name="hospedagem")
    
    # Inserção do valor da época (não usar valores pré-definidos)
    # Valores pré-definidos podem mudar do período da entrada dos hospede para o saída
    # O valor a ser considerado é o valor da época que o hospede entrou no hotel (digitado manualmente)
    diaria = models.IntegerField("Valor diária")
    
    # ocupado = models.CharField("Status do apartamento", max_length=1, choices=APT_STATUS)
    livre = models.BooleanField("Status do apartamento")

    def __str__(self):
            return f'{self.id_cliente.nome} - {self.id_cliente.cpf}'

    class Meta:
        verbose_name = 'Hospedagem'
        verbose_name_plural = 'Hospedagens'

# =========================================== Funções de utilidade ===========================================
def choose_random_i(min, max):
    return floor(random() * (max - min) + min)

def get_name():
    names = (
        "Ana", "João", "Maria", "Pedro", "Isabella", "Lucas", "Sofia", "Gabriel", "Laura", "Enzo",
        "Valentina", "Miguel", "Manuela", "Matheus", "Helena", "Rafael", "Júlia", "Heitor", "Giovanna",
        "Arthur", "Laura", "Davi", "Beatriz", "Bernardo", "Luísa", "Gabriel", "Yasmin", "João", "Mariana",
        "Murilo", "Lívia", "Matheus", "Lorena", "Lucas", "Rafaela", "Theo", "Isadora", "Enzo", "Ana", "Pedro",
        "Clara", "Felipe", "Sophia", "Gustavo", "Camila", "Samuel", "Emanuelly", "Eduardo", "Vitória", "Antônio",
        "Isabelly", "Daniel", "Alice", "Henrique", "Isabelle", "Nicolas", "Maria", "Arthur", "Giovana", "Bryan",
        "Eduarda", "Caio", "Ana", "Leonardo", "Maria", "Joaquim", "Isabella", "Murilo", "Luana", "Enzo", "Letícia",
        "Pedro", "Larissa", "Vinícius", "Laura", "Rafael", "Júlia", "Davi", "Beatriz", "Bernardo", "Fernanda",
        "Lucas", "Manuela", "Matheus", "Rafaela", "Theo", "Mariana", "Gabriel", "Lívia", "Arthur", "Yasmin",
        "Miguel", "Valentina", "João", "Helena", "Enzo", "Sophia", "Gustavo", "Isadora", "Samuel"
    )
    return names[choose_random_i(0, len(names))]

def get_last_name():
    last_names = (
        'Abreu', 'Afonso', 'Aguiar', 'Aires', 'Albuquerque', 'Alcantara', 'Alencar', 'Almeida', 'Alves', 
        'Alves da silva', 'Amaral', 'Amaro', 'Amorim', 'Andrade', 'Antunes', 'Aparecido', 'Aquino', 'Aragao', 
        'Arantes', 'Araujo', 'Araújo', 'Arruda', 'Assis', 'Assuncao', 'Augusto', 'Azevedo', 'Bandeira', 
        'Baptista', 'Barbosa', 'Barboza', 'Barcelos', 'Barreto', 'Barros', 'Barroso', 'Bastos', 'Batista', 
        'Bento', 'Bernardes', 'Bezerra', 'Bispo', 'Bittencourt', 'Bonfim', 'Borba', 'Borges', 'Botelho', 
        'Braga', 'Brandao', 'Brasil', 'Braz', 'Brito', 'Bueno', 'Cabral', 'Caetano', 'Caldas', 'Caldeira', 
        'Camargo', 'Campos', 'Cardoso', 'Carlos', 'Carneiro', 'Carvalho', 'Castro', 'Cavalcante', 
        'Cavalcanti', 'Cerqueira', 'Cezar', 'Chagas', 'Chaves', 'Clemente', 'Coelho', 'Cordeiro', 'Correa', 
        'Correia', 'Costa', 'Coutinho', 'Couto', 'Cruz', 'Cunha', 'Custodio', 'Esteves', 'Evangelista', 
        'Fagundes', 'Faria', 'Farias', 'Feitosa', 'Felix', 'Fernandes', 'Ferrari', 'Ferraz', 'Ferreira', 
        'Ferreira da silva', 'Figueiredo', 'Filho', 'Firmino', 'Flores', 'Fonseca', 'Fontes', 'Fraga', 
        'Franca', 'Francisco', 'Franco', 'Freire', 'Freitas', 'Furtado', 'Galvao', 'Gama', 'Garcia', 'Goes', 
        'Gomes', 'Gonzaga', 'Gonçalves', 'Goulart', 'Gouveia', 'Guedes', 'Guerra', 'Guimaraes', 'Henrique', 
        'Henrique da silva', 'Holanda', 'Inacio', 'Jardim', 'Junior', 'Lacerda', 'Leal', 'Leao', 'Leite', 
        'Lemes', 'Lemos', 'Lima', 'Linhares', 'Lins', 'Lira', 'Lisboa', 'Lopes', 'Lourenço', 'Lucena', 
        'Macedo', 'Machado', 'Maciel', 'Magalhaes', 'Maia', 'Marcondes', 'Mariano', 'Marinho', 'Marques', 
        'Martins', 'Mateus', 'Matias', 'Matos', 'Mattos', 'Medeiros', 'Meira', 'Meireles', 'Mello', 'Melo', 
        'Mendes', 'Mendonca', 'Menezes', 'Mesquita', 'Messias', 'Miranda', 'Monteiro', 'Moraes', 'Morais', 
        'Moreira', 'Moreno', 'Mota', 'Motta', 'Moura', 'Muller', 'Muniz', 'Nascimento', 'Neres', 'Neto', 
        'Neves', 'Nobre', 'Nogueira', 'Nonato', 'Novaes', 'Nunes', 'Oliveira', 'Pacheco', 'Padilha', 'Paes', 
        'Paiva', 'Paixao', 'Passos', 'Paz', 'Pedrosa', 'Pedroso', 'Peixoto', 'Pereira', 'Pereira da silva', 
        'Peres', 'Perreira', 'Pessoa', 'Pimenta', 'Pimentel', 'Pinheiro', 'Pinto', 'Pires', 'Pontes', 
        'Portela', 'Porto', 'Prado', 'Queiroz', 'Rabelo', 'Ramalho', 'Ramos', 'Rangel', 'Reis', 'Resende', 
        'Rezende', 'Ribas', 'Ribeiro', 'Rios', 'Rocha', 'Rodrigues', 'Rodriguês', 'Roque', 'Rosa', 'Rossi', 
        'Sa', 'Sales', 'Sampaio', 'Sanches', 'Santana', 'Santiago', 'Santos', 'Saraiva', 'Sena', 'Serafim', 
        'Silva', 'Silveira', 'Simao', 'Simoes', 'Siqueira', 'Soares', 'Sobrinho', 'Sousa', 'Souto', 'Souza', 
        'Sántos', 'Tavares', 'Teixeira', 'Teles', 'Tenorio', 'Toledo', 'Tomaz', 'Torres', 'Trindade', 'Valerio',
        'Vargas', 'Vasconcelos', 'Vaz', 'Veiga', 'Veloso', 'Ventura', 'Viana', 'Vicente', 'Vidal', 'Vieira', 
        'Vilela', 'Xavier'
    )
    
    return last_names[choose_random_i(0, len(last_names))]

def get_name_complement():
    complements = (
        'da Costa', 'da Cruz', 'da Cunha', 'da Fonseca', 'da Luz', 'da Paixao', 'da Paz', 'da Penha', 
        'da Rocha', 'da Rosa', 'da Silva', 'da Silveira', 'das Chagas', 'das Dores', 'das Gracas', 
        'das Neves', 'de Albuquerque', 'de Abreu', 'de Aguiar', 'de Almeida', 'de Amorim', 'de Andrade', 
        'de Aquino', 'de Araujo', 'de Arruda', 'de Assis', 'de Azevedo', 'de Barros', 'de Brito', 
        'de Camargo', 'de Campos', 'de Carvalho', 'de Cassia', 'de Castro', 'de Deus', 'de Faria', 
        'de Farias', 'de Fatima', 'de Franca', 'de Freitas', 'de Jesus', 'de Lima', 'de Lourdes', 
        'de Macedo', 'de Matos', 'de Medeiros', 'de Mello', 'de Melo', 'de Menezes', 'de Miranda', 
        'de Moraes', 'de Morais', 'de Moura', 'de Oliveira', 'de Paiva', 'de Paula', 'de Queiroz', 'de Sa', 
        'de Sales', 'de Santana', 'de Sena', 'de Siqueira', 'de Sousa', 'de Souza', 'do Amaral', 'do Carmo', 
        'do Espiritosanto', 'do Nascimento', 'do Prado', 'do Rosario', 'do Socorro', 'dos Anjos', 'dos Passos', 
        'dos Reis', 'dos Santos'
    )

    return complements[choose_random_i(0, len(complements))]

def get_street_name():
    streets = (
        'Acólito', 'Adjunto', 'Adstrito', 'Agorácrito', 'Alcunha', 'Almirante', 'Arconte', 'Ardiloso', 'Aspirante', 'Brigadeiro', 'Cabo', 
        'Censor', 'Chistoso', 'Coadjutor', 'Comarca', 'Conchacil', 'Conchalim', 'Corolário', 'Coronel', 'Corregedor', 'Corveta', 'Eflúvio', 
        'Esquadra', 'Fragata', 'Frugal', 'General', 'Ignóbil', 'Juiz', 'Julgador', 'Justapor', 'Louvado', 'Magistrado', 'Major', 'Manguri', 
        'Marechal', 'Marinheiro', 'Mediatário', 'Ministro', 'Opróbio', 'Oscular', 'Ouvidor', 'Pacóvio', 'Pederasta', 'Perito', 'Permuta', 
        'Prolator', 'Protegômenos', 'Quimera', 'Recôndito', 'Rubicundo', 'Sargento', 'Soldado', 'Sorumbático', 'Tenente', 'Tergiversar', 
        'Testemunha', 'Tribuno', 'Tácito', 'Veneta', 'Vitupério'
    )
    return streets[choose_random_i(0, len(streets))]

def get_block():
    pass

def get_block():
    block_sizes = (1, 2, 3)
    alphabet = "A.B.C.D.E.F.G.H.I.J.K.L.M.N.O.P.Q.R.S.T.U.V.W.X.Y.Z".split(".")
    block_size = block_sizes[choose_random_i(0, len(block_sizes))]
    block_name = ""

    if block_size == 1: 
        block_name = alphabet[choose_random_i(0, len(alphabet))]
    elif block_size == 2:
        for n in range(2):
            block_name += alphabet[choose_random_i(0, len(alphabet))]
    else:
        for n in range(3):
            block_name += alphabet[choose_random_i(0, len(alphabet))]
    return "Quadra " + block_name

def get_house_number():
    numbers = tuple(range(0, 10))
    digits_size = (1, 2, 3, 4)
    n_digits = numbers[choose_random_i(0, len(digits_size))]
    string = ""

    if n_digits == 1:
        string += str(numbers[choose_random_i(0, len(numbers))])
    elif n_digits == 2:
        for n in range(2):
            string += str(numbers[choose_random_i(0, len(numbers))])
    elif n_digits == 3:
        for n in range(3):
            string += str(numbers[choose_random_i(0, len(numbers))])
    else:
        for n in range(4):
            string += str(numbers[choose_random_i(0, len(numbers))])
    
    return "casa " + string

def create_person():
    a_void = " "
    name = get_name()
    last_name = get_last_name()
    complements = get_name_complement()

    return name + a_void + last_name + a_void + complements

def create_street_name():
    a_void = " "
    streetA = None
    streetB = None
    
    while (streetA == streetB):
        streetA = get_street_name()
        streetB = get_street_name()
    
    return "Rua " + get_street_name() + a_void + get_name() + a_void + get_street_name() + a_void + get_name_complement()

def show_person_sample():
    return create_person() + ", " + create_street_name() + ', ' + get_block() + ', ' + get_house_number()

def show_clients():
    return Hospede.objects.all()
