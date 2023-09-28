

/*
9.7) Crie a função recursiva "igual(A, B)", que verifica se a lista A é igual à lista B. Por exemplo, se I
aponta [1, 2, 3], J aponta [1, 2, 3] e K aponta [1, 3, 2], sa chamadas "igual(I, J)" e "igual(I, K)" devem
devolver 1 e 0, respectivamente.
*/

#include "../lista.h"

int listComparison(Array A, Array B) {
    // If both lists have reached their end, they are actually twins
    if (A == NULL && B == NULL) {return 1;}
    // If one of the reaches its end and the other does not, they are not twins
    if (A == NULL || B == NULL) {return 0;}
    if (A->item != B->item) {return 0;}
    return listComparison(A->next, B->next);
}

int main() {
    Array I = newArray(3, NULL);
    I = newArray(2, I);
    I = newArray(1, I);

    Array J = newArray(3, NULL);
    J = newArray(2, J);
    J = newArray(1, J);

    Array K = newArray(2, NULL);
    K = newArray(3, K);
    K = newArray(1, K);

    printf("\n%d", listComparison(I, J));
    printf("\n%d", listComparison(I, K));
    return 0;
}
