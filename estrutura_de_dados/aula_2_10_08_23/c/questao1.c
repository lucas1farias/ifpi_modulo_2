

/*
    1. No programa abaixo, complete o código calculando e 
    imprimindo qual o tamanho da cadeia de caracteres que foi 
    incluída pelo usuário
*/

#include <stdio.h>
#include <string.h>

int meu_strlen(char str[]) {
    size_t i = 0;
    while (str[i] != '\0') {
        i++;
    }
    return i;
}

char frase[20];

int main() {
    printf("Escreva uma palavra >>> ");
    scanf("%s", frase);
    printf("%d", meu_strlen(frase));
    return 0;
}
