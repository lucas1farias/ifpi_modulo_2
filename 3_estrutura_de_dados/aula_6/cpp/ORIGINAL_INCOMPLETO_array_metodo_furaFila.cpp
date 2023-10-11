#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include <iostream>
using namespace std;

typedef struct lista{
        char letra;
        struct lista *prox;
}Lista;


Lista *novo= NULL;
Lista *inicio = NULL;
Lista *fim;
Lista *atual;
Lista *anterior;


void inserirLetra(char letra);
void furaFila(int pos);
void mostrar();

main(){
	int cont;
	char l;
   	do {
      	printf("\n\n1 - Inserir Letra ");
      	printf("\n2 - Furar a fila ");
      	printf("\n3 - Mostrar letras ");
      	printf("\n5 - Sair ");
      	printf("\nDigite a Opcao Desejada: ");
      	scanf("%d",&cont);

        switch(cont) {
         	case 1:
			 	printf("Digite uma letra: ");			 	
			 	cin>>l;
			 	inserirLetra(l); 	
				break;
         	case 2:
         		int pos;
			 	printf("Digite uma letra: ");
			 	cin>>l;
			 	
			 	printf("Digite a posicao: ");
				scanf("%d", &pos);
				
				
				break;
         	case 3:mostrar(); break;
         	case 5:break;
         	default: printf("Opcao invalida! tente de novo! ");
        }
        
        
      }while (cont != 5);		
		
}

void inserirLetra(char letra){
	novo = new Lista();
	novo->letra=letra;
	novo->prox=0;

}

void furaFila(int pos){
	
	
	
}

void mostrar(){
	atual = inicio;
	
	while(atual != NULL){
		printf("%c", atual->letra);
        atual = atual->prox;
	}
	

	
}
