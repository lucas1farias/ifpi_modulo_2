

#include <stdio.h>
#include <iostream>
using namespace std;

// 3. Sobre o programa a seguir:

typedef struct no{
    int item;
    struct no *prox;
} No;

int main() {
    // a. Que valores serão impressos ao final do programa?
    No v[4]= {{3, v + 2}, {4, NULL}, {10, v + 1}};
    
    std::cout << "\n========== Questao 3: letra a ==========\n";
    for (No *p = v; p != NULL; p = p->prox) {
        cout << p->item << endl;
    }
    /*
      . *p é um ponteiro que aponta para "v", que é um array de estruturas
      . Se *p = v, então *p aponta para o primeiro índice de "v"
      . O estranho é que a lista "v" aponta para se mesma nos seus índices pelo uso de "v"
      . Por exemplo, no índice 0: {item=3, prox=v + 2}
      . O atrib. "prox", ao apontar para "v", aponta para si mesma, na posição usada na soma
      . Portanto, "v" começa normalmente com o "item" do índice 0 = 3
      . Depois, pelo atrib. "prox", ele aponta para o índice 2 = 10
      . Do índice 2, ele aponta para o índice 1 = 4
      . Do índice 1, não há mais o que apontar, chegando ao fim da lista
      
      . Então, no loop, é impresso o resultado abaixo pelo fato de "->item" estar sendo acessado
          3
          4
          10
    */
    
    // b. Considere os seguintes nós n1 e n2:
    No *n1 = (No*)malloc(sizeof(No));
    n1->item = 1;
    n1->prox = NULL;

    No *n2 = (No*)malloc(sizeof(No));
    n2->item = 4;
    n2->prox = NULL;

    // b.1. Como encadear os nós de forma a criar uma lista na sequencia {n1, n2, NULL}
    std::cout << "\n========== Questao 3: letra b.1 ==========\n";
    std::cout << "No lista[2] = {{1, lista + 1}, {4, NULL}};\n";
    No lista[2] = {{1, lista + 1}, {4, NULL}};

    // b.2. Como percorrer os nós e imprimir todos os itens da lista?
    // OBS: saída deve ser: 1 4
    std::cout << "\n========== Questao 3: letra b.2 ==========\n";
    for (No *ptr = lista; ptr != NULL; ptr = ptr->prox) {
        std::cout << ptr->item << std::endl;
    }

    // c. Considere os nós:
    No *n3 = new No();
    n1->item = 10;
    n1->prox = NULL;
    
    No *n4 = new No();
    n2->item = 3;
    n2->prox = NULL;
    
    No *n5 = new No();
    n2->item = 4;
    n2->prox = NULL;
    
    // c.1. Como encadear os nós de forma a criar uma lista ordenada pelo item (3,4,10).
    std::cout << "\n========== Questao 3: letra c.1 ==========\n";
    std::cout << "No cadeia[3] = {{3, cadeia + 1}, {4, cadeia + 2}, {10, NULL}};\n";
    No cadeia[3] = {{3, cadeia + 1}, {4, cadeia + 2}, {10, NULL}};

    // c.2. Percorra os nós e imprima todos os itens da lista.
    // OBS: SAÍDA DEVE SER: 3 4 10
    std::cout << "\n========== Questao 3: letra c.2 ==========\n";
    for (No *i = cadeia; i != NULL; i = i->prox) {
        std::cout << i->item << std::endl;
    }
}
