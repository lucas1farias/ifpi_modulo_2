

/* PERGUNTA
    Ao ser executado, o programa a seguir exibe a palavra diferentes. Explique por que isso acontece
*/

/* RESPOSTA
  Ao comparar variáveis, mesmo sendo idênticas em conteúdo, o que está sendo comparado são seus endereços. Seus 
  endereços não ocupam o mesmo local, seu conteúdo não está sendo comparado
*/

#include <stdio.h>

int main(void) {
    char s[3] = "um";
    char t[3] = "um";
    
    if (s == t) 
        puts("iguais");
    else 
        puts("diferentes");
    
    return 0;
}
