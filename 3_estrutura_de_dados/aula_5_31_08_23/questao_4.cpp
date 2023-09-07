

#include <iostream>
#include <string>

typedef struct pessoa {
    int cpf;
    std::string nome[20];
    pessoa *prox;
} Pessoa;

Pessoa *inicio = NULL;
Pessoa *fim = NULL;

Pessoa *cadastrarPessoa(int cpf, std::string nome) {
    Pessoa *novo = new Pessoa();
    novo->cpf = cpf;
    *novo->nome = nome;
    novo->prox = NULL;
    return novo;
}

void exibirDadosPessoa(Pessoa *pessoa) {
    Pessoa *individuo = pessoa;
    std::cout << "[ " << "cpf: " << individuo->cpf << ", nome: " << *individuo->nome << " ]\n";
}

void incluirAoInicio(Pessoa *pessoa) {
    if (inicio == NULL) {
        inicio = pessoa;
        fim = pessoa;
    } else {
        pessoa->prox = inicio;
        inicio = pessoa;
    }
}

void mostrarCpf() {
    Pessoa *cadaPessoa = inicio;
    std::cout << "{";
    while (cadaPessoa != NULL) {
        std::cout << cadaPessoa->cpf << ",";
        cadaPessoa = cadaPessoa->prox;
    }
    std::cout << "}";
}

void mostrar() {
    Pessoa *cadaPessoa = inicio;
    std::cout << "\n[\n";
    while (cadaPessoa != NULL) {
        std::cout << "    cpf: " << cadaPessoa->cpf << ", nome: " << *cadaPessoa->nome << ",\n";
        cadaPessoa = cadaPessoa->prox;
    }
    std::cout << "]";
}

int main() {
    Pessoa *fabio = cadastrarPessoa(1111, "Fabio");
    Pessoa *katia = cadastrarPessoa(2222, "Katia");
    Pessoa *jonathas = cadastrarPessoa(4444, "Jonathas");
    // 4.1
    exibirDadosPessoa(fabio);
    exibirDadosPessoa(katia);
    exibirDadosPessoa(jonathas);
    incluirAoInicio(katia);
    incluirAoInicio(fabio);
    incluirAoInicio(jonathas);
    // 4.2
    mostrarCpf();
    // 4.3
    mostrar();
}
