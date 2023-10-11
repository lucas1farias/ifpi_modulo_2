

// Letras: A, C
void questao_1() {
    /*
    1. Considerando o código abaixo, marque a(s) alternativa(s) correta(s):
    
    typedef struct no {
        int cod;
        char nome[20];
    } No;

    main() {
        // Armazena a quantidade de elementos em "vetor", ela 
        // deve ser incrementada a cada inclusão de elementos
        int pos = 0;
        No primeiro = {1, "ana maria"};
        No segundo = {2, "carla gomes"};
        No vetor[10];
    }
    
    (a) Ao incluir “primeiro” e “segundo” na estrutura “vetor” 
    estamos criando uma lista estática.
    
    (b) Ao incluir “primeiro” e “segundo” na estrutura “vetor” 
    estamos criando uma lista dinâmica.
    
    (c) Para incluir “primeiro” na primeira posição de “vetor” 
    podemos fazer “vetor[0]=primeiro;”. Para incluir “segundo” 
    na segunda posição de “vetor” podemos fazer 
    “*(vetor+1)=segundo”.
    
    (d) A declaração de “vetor” é uma alocação sequencial 
    dinâmica.
    */
}

// Letras A, B 
void questao_4() {
    /*
    typedef struct no {
        int matricula;
        char nome[20];
        no *prox;
    } No;

    main() {
        No primeiro = (No*)(malloc(sizeof(No)));
        primeiro->matricula = 1;
        strcpy(primeiro->nome, "joao");
        primeiro->prox = NULL;
        No *segundo = (No*)(malloc(sizeof(No)));
        segundo->matricula = 2;
        strcpy(segundo->nome, "carlos");
        segundo->prox=NULL:
    }
    */
}
