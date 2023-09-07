

#include <stdio.h>

/*
2. Encontre os erros:
    . Sei que há erros, mas não sei explicar
*/ 

void troca (int *i, int *j) {
    int *temp;
    *temp = *i;
    *i = *j;
    *j = *temp;
}
