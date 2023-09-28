

/*
9.3 Crie a função iterativa "ultimo(L)", que devolve o último item da lista L. Por exemplo, para L apontando a
lista [a, b, c], a função deve devolver o item "c".
*/

#include "../lista.h"

typedef char Letter;
typedef struct arrayStr {
    Letter i;
    struct arrayStr *next;
} *ArrayStr;

ArrayStr newArrayStr(Letter letter, ArrayStr arrayStr) {
    ArrayStr dynamicArray = malloc(sizeof(struct arrayStr));
    dynamicArray->i = letter;
    dynamicArray->next = arrayStr;
    return dynamicArray;
}

void exhibit(ArrayStr arrayStr) {
    ArrayStr ptr = arrayStr;
    printf("[ ");
    while (ptr != NULL) {
        printf("%c, ", ptr->i);
        ptr = ptr->next;
    }
    printf("]");  
}

// Função iterativa
int lastIndex(ArrayStr arrayStr) {
    ArrayStr ptr = arrayStr;
    while (ptr != NULL) {
        if (ptr->next == NULL) {
            return ptr->i;
        }
        ptr = ptr->next;
    }
}

int main() {
    ArrayStr letters = newArrayStr('c', NULL);
    letters = newArrayStr('b', letters);
    letters = newArrayStr('a', letters);
    exhibit(letters);
    printf("\n%c", lastIndex(letters));
    return 0;
}
