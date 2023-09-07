

#include <stdio.h>

int *a, *b;
int c = 2;
int d = 7;

void trocarNumeros(int *a, int *b) {
    int temp;
    temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    a = &c;
    b = &d;
    printf("Valor atual de 'a': %d\n", *a);
    printf("Valor atual de 'b': %d\n", *b);
    trocarNumeros(a, b);
    printf("Valor atual de 'a': %d\n", *a);
    printf("Valor atual de 'b': %d\n", *b);
    return 0;
}
