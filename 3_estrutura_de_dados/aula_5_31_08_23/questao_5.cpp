

#include <iostream>
#include <string>

typedef struct aluno {
    int mat;
    std::string nome[20];
    aluno *prox;
} Aluno;

Aluno *inicio = NULL;
Aluno *fim = NULL;

Aluno *novoAluno(int mat, std::string nome) {
    Aluno *novo = new Aluno();
    novo->mat = mat;
    *novo->nome = nome;
    novo->prox = NULL;
    return novo;
}

void incluirAoInicio(Aluno *aluno) {
    if (inicio == NULL) {
        inicio = aluno;
        fim = aluno;
    } else {
        aluno->prox = inicio;
        inicio = aluno;
    }
}

void incluirAoFinal(Aluno *aluno) {
    if (inicio == NULL) {
        inicio = aluno;
        fim = aluno;
    } else {
        fim->prox = aluno;
        fim = aluno;
    }
}

Aluno *procurar(int mat) {
    Aluno *cadaAluno = inicio;
    while (cadaAluno != NULL) {
        if (cadaAluno->mat == mat) {
            return cadaAluno;
        } else {
            cadaAluno = cadaAluno->prox;
        }
    }
    return NULL;
}

void mostrar() {
    Aluno *cadaAluno = inicio;
    std::cout << "\n[\n";
    while (cadaAluno != NULL) {
        std::cout << "    " << "matricula: " << cadaAluno->mat << ", nome: " << *cadaAluno->nome << ",\n";
        cadaAluno = cadaAluno->prox;
    }
    std::cout << "]";
}

void retornarAluno() {
    int matricula;
    std::cout << "Digite o numero da matricula do aluno procurado >>> ";
    std::cin >> matricula;
    Aluno *alunoAlvo = procurar(matricula);
    
    if (alunoAlvo == NULL) {
        std::cout << "Aluno nao encontrado" << std::endl;
    } else {
        std::cout << "\n======= DADOS DO ALUNO =======\n";
        std::cout << "[ " << "matricula: " << alunoAlvo->mat << ", nome: " << *alunoAlvo->nome << " ]" << std::endl;;
    }
}

int main() {
    Aluno *aluno = novoAluno(1, "Ana");
    incluirAoInicio(aluno);
    aluno = novoAluno(2, "Ena");
    incluirAoInicio(aluno);
    aluno = novoAluno(3, "Ina");
    incluirAoFinal(aluno);
    mostrar();
    retornarAluno();
    return 0;
}
