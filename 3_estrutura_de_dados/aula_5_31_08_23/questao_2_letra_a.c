

#include <stdio.h>

/*
2. Encontre os erros:
    . Aspas inapropriadas
    . Notação ponto sem sentido e no parâmetro incorreto da função "printf"
*/ 

void main() {
    int x, *p;
    x = 100;
    p = x;
    printf(“Valor de p: %d.n”, *p);
}

// c)
/*
  Ausência de tipagem em "main" com "int" ou "void"

*/
// int main(){
//     char *a, *b;
//     a = "uva";
//     b = "carro";
    
//     if (strcmp(a, b))
//         printf("são iguais");
//     else{
//         if (a < b)
//             printf("%s vem antes de %s no dicionário", a, b);
//         else
//             printf("%s vem depois de %s no dicionário", a, b);
//     }
//     return 0;
// }
