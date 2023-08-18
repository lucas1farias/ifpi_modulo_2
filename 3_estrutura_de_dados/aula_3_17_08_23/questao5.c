

/* PERGUNTA
  Explique o que acontece quando o programa a seguir é executado.
*/

/* RESPOSTA
  *p guarda o EM de a, então: *p = 3
  *q guarda o EM de b, então: *q = 5
  
  *p = valor de *p + valor de *q, então: *p = 3 + 5 ... *p = 8
  *q = valor de *p - valor de *q, então: *q = 8 - 5 ... *q = 3
  *p = valor de *p - valor de *q, então: *p = 8 - 3 ... *p = 5
  
  Se *p aponta para "a" e *p = 5, então "a" = 5
  Se *q aponta para "b" e *q = 3, então "b" = 3
*/

#include <stdio.h>

int main(void) {
    int a = 3, b = 5;
    int *p = &a, *q = &b;
    *p = *p + *q;
    *q = *p - *q; //
    *p = *p - *q;
    printf("%d\n%d\n", a, b);
    return 0;
}
