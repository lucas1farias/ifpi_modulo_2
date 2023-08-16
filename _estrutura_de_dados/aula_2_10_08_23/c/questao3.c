

/*
    Leia duas strings e compare, se elas forem iguais, imprima
    "São iguais!!", senão imprima "São diferentes!!":

    a) As duas strings devem ser definidas como char[10],
       conforme abaixo:

    b) As duas strings devem ser definidas como strings, para
       isso use a biblioteca iostream do C++, conforme abaixo
*/

#include <stdio.h>

int tamanho(char colecao[]) {
    size_t i = 0;
    while (colecao[i] != '\0') {
        i++;
    }
    return i;
}

int comparar(char strA[], char strB[]) {
    size_t i, j;

    if (tamanho(strA) != tamanho(strB)) {
        return 0;
    }
    else {
        while (strA[i] != '\0' && strB[i] != '\0') {
            if (strA[i] != strB[i]) {
                return 0;
            }
            i++;
        }
    }
    if (strA[i] == '\0' && strB[i] == '\0') 
        return 1;
}

int main() {
    char f1[10];
    char f2[10];
    
    printf("Primeira palavra >>> ");
    scanf("%s", f1);
    printf("Segunda palavra >>> ");
    scanf("%s", f2);

    if (comparar(f1, f2) == 1) 
        printf("Sao iguais!!");
    else 
        printf("Sao diferentes!!");
    
    return 0;
}