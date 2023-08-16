

/*
    2. No exemplo, percorra a "frase" e imprima os valores
    caractere a caractere na tela do computador. O laço de
    repetição deve percorrer "frase" até que ele encontre o 
    final da string (caractere especial para fim da string 
    igual a '\0')
*/

#include <stdio.h>
#include <string.h>

int tamanho(char str[]) {
    size_t i = 0;
    while (str[i] != '\0') {
        i++;
    }
    return i;
}

void percorrer(char strA[]) {
    printf("\n`{\n");
    for (size_t i = 0; i < tamanho(strA); i++) {
        printf("    %c,\n", strA[i]);
    }
    printf("\n}");
}

char frase[20] = "uma frase";

int main() {
    percorrer(frase);
    return 0;
}