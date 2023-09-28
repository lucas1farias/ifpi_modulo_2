

#include <stdio.h>
#include <stdlib.h>

typedef int Item;
typedef struct list {
    Item item;
    struct list *next;
} *Array; 

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

Array newArray(Item i, Array array) {
    Array newArray = malloc(sizeof(struct list));
    newArray->item = i;
    newArray->next = array;
    return newArray;
}

void display(Array array) {
    Array ptr = array;
    printf("[");
    // while (ptr) {
    //     printf("%d, ", ptr->item);
    //     ptr = ptr->next;
    // }
    for (Array ptr = array; ptr != NULL; ptr = ptr->next) {
        printf("%d, ", ptr->item);
    }
    printf("]");
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

// Apparently, parameters that are pointers are passed with &
void merge(Array *A, Array B) {
    if (B == NULL) return;
    while (*A != NULL) {
        A = &(*A)->next;
    }
    *A = B;
}

void destroy(Array *targetArray) {
    while (*targetArray != NULL) {
        Array ptr = *targetArray;
        *targetArray = ptr->next;
        free(ptr);
    }
}

int arraySize(Array array) {
    if (array == NULL) return 0;
    return 1 + arraySize(array->next);
}

int arraySize2(Array array) {
    int counter = 0;
    Array ptr = array;
    while (ptr != NULL) {
        counter++;
        ptr = ptr->next;
    }
    return counter;
}

int isIndex(Item i, Array array) {
    Array ptr = array;
    if (ptr == NULL) return 0;
    if (i == ptr->item) return 1;
    return isIndex(ptr->item, ptr->next);
}

Array copy(Array array) {
    Array ptr = array;
    if (ptr == NULL) return NULL;
    return newArray(ptr->item, copy(ptr->next));
}

// Recursive function
void reversed(Array array) {
    Array ptr = array;
    if (ptr == NULL) return;
    reversed(ptr->next);
    // It is not printing after each recursion
    printf("%d, ", ptr->item);
}

void bricks() {
    printf("\n==========\n");
}

// int main() {
//     Array arrayA = newArray(3, NULL);
//     arrayA = newArray(2, arrayA);
//     arrayA = newArray(1, arrayA);
    
//     Array arrayB = newArray(5, NULL);
//     arrayB = newArray(4, arrayB);
    
//     bricks();
//     display(arrayA);

//     bricks();
//     display(arrayB);

//     merge(&arrayA, arrayB);
//     bricks();

//     display(arrayA);

//     // destroy(&arrayA);
//     // display(arrayA);

//     bricks();
//     printf("%d", arraySize(arrayA));

//     bricks();
//     printf("%d", arraySize2(arrayA));
    
//     bricks();
//     printf("%d", isIndex(1 ,arrayA));

//     bricks();
//     printf("%d", isIndex(7 ,arrayA));

//     bricks();
//     reversed(arrayA);

//     Array arrayC = copy(arrayB);
//     bricks();
//     display(arrayC);

//     return 0;
// }
