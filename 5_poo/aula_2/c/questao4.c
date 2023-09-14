

/* 
    4. Pesquise e exemplifique com um exemplo porque dizemos que a linguagem C, mesmo tendo tipagem estática, 
       possui tipagem fraca.
*/

#include <stdio.h>
#include <string.h>

int main() {
    /* 
      Mesmo somando dois dados imcompatíveis, C considera o valor ASCII de "nota2", que é 97
      Como resultado: 3 + 'a' = 3 + 97 = 100
    */
    int nota = 3;
    char nota2 = 'a';
    printf("%d", nota + nota2);
    return 0;
}
