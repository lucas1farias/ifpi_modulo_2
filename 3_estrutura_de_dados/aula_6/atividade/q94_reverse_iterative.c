

/*
9.4 Crie a função iterativa "inversa(L)", que devolve a lista inversa de L. Por exemplo, para L apontando a 
lista [7, 9, 2], a função deve devolver [2, 9, 7]
*/

#include <stdio.h>
#include "../lista.h"

// Iterative function
Array myReversed(Array array) {
    Array previous = NULL;
    Array current = array;
    Array next;
    
    while (current != NULL) {
        next = current->next;
        current->next = previous;
        previous = current;
        current = next;
    }
    return previous;
}

int main() {
    Array A = newArray(2, NULL);
    A = newArray(9, A);
    A = newArray(7, A);
    
    display(A);
    
    Array reversedA = myReversed(A);
    display(reversedA);

    return 0;
}
