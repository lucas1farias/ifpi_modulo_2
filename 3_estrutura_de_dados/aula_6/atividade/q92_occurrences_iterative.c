

/*
9.2 Crie a função iterativa "ocorrencias(x, L)", que informa quantas vezes o item "x" ocorre na lista "L". Por 
exemplo, para "L" apontando a lista [1, 2, 1, 4, 1], a chamada "ocorrencias(1, L)" deve devolver 3 como 
resposta.
*/

#include "../lista.h"

// Função iterativa
int occurrences(Item n, Array array) {
    Array ptr = array;
    int repeated = 0;
    while (ptr != NULL) {
        if (ptr->item == n) {
            repeated++;
        }
        ptr = ptr->next;
    }
        
    return repeated;
}

int main() {
    Array A = newArray(1, NULL);
    A = newArray(4, A);
    A = newArray(1, A);
    A = newArray(2, A);
    A = newArray(1, A);
    printf("\nQuantidade de ocorrencias do valor 1? %d", occurrences(1, A));
    return 0;
}
