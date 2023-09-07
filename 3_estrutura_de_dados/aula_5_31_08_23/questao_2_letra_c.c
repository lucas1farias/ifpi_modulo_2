

#include <stdio.h>

/*
  Não se compara endereços de memória em strings
  A função correta p/ comparar é "strcmp(char, char)"
  A comparação dos ponteiros (a < b) compara seus valores ascii, não seus tamanhos de fato
*/
int main(){
    char *a, *b;
    a = "uva";
    b = "carro";
    
    if (&a == &b)
        printf("são iguais");
    else{
        if (a < b)
            printf("%s vem antes de %s no dicionário", a, b);
        else
            printf("%s vem depois de %s no dicionário", a, b);
    }

    return 0;
}
