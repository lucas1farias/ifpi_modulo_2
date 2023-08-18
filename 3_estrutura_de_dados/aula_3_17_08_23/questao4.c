

/* PERGUNTA
  Explique o que acontece quando o programa a seguir é executado.
*/

/* RESPOSTA
  Os valores inicialmente atribuidos a "x" são modificados, mesmo isso não tendo sido feito explicitamente
  devido a atribuição da estrutura de "x" por "y". Os valores iniciais de "x" são trocados pelos de "y"
  independente da quantidade de atributos definidos na estrutura, todas seriam modificadas após "x = y"
*/

#include <stdio.h>
typedef struct {
    char valor[10];
} Str;

int main(void) {
    Str x = {"um"};
    Str y = {"dois"};
    puts(x.valor);
    x = y;
    puts(x.valor);
    return 0;
}