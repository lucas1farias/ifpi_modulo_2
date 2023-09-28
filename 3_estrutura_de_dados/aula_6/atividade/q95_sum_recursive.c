

/*
9.5) Crie a função recursiva "soma(L)", que devolve a soma dos itens da lista L. Por exemplo, para L apontando 
a lista [3, 1, 5, 4], a função deve devolver 13.
*/

#include <stdio.h>
#include "../lista.h"

// Recursive function
int sum(Array array) {
    if (array == NULL) return 0;
    return array->item + sum(array->next);
}

int main() {
    Array A = newArray(4, NULL);
    A = newArray(5, A);
    A = newArray(1, A);
    A = newArray(3, A);
    
    display(A);
    printf("\n%d", sum(A));

    return 0;
}
