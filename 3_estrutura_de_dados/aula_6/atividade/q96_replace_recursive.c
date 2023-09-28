

/*
9.6) Crie a função recursiva "substitui(x, y, L)", que substitui toda ocorrência do item "x" pelo item "y" na
lista L. Por exemplo, se L aponta a lista [b, o, b, o], após a chamada "substitui('o', 'a', L)", L deverá 
apontar a lista [b, a, b, a].
*/

#include "../lista.h"

// 
void replace(Letter newLetter, Letter target, ArrayStr arrayStr) {
    // ArrayStr ptr = arrayStr;
    // while (ptr != NULL) {
    //     if (ptr->i == target) {
    //         ptr->i = letter;
    //     }
    //     ptr = ptr->next;
    // }
    if (arrayStr == NULL) return;
    if (arrayStr->i == target) arrayStr->i = newLetter;
    return replace(newLetter, target, arrayStr->next);
}

int main() {
    ArrayStr A = newArrayStr('a', NULL);
    A = newArrayStr('b', A);
    A = newArrayStr('a', A);
    A = newArrayStr('b', A);
    
    exhibit(A);
    replace('o', 'a', A);
    exhibit(A);
    
    return 0;
}
