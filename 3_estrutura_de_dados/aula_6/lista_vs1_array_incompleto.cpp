

#include <stdio.h>
#include <iostream>
using namespace std;
const int arraySize = 30;

// The main struct on this document
typedef struct aluno{
	int mat;
	string nome;	
} Aluno; 

/*
    lista || When arrays have a static size, the indexes are all filled as zero
    pos   || Variable which controls the indexes from "lista"
*/
Aluno lista[arraySize];
int pos = 0;

/*
    newStudent || avoid code pollution on main function
*/
Aluno *newStudent(int ident, string name) {
	Aluno *newStudent = new Aluno();
	newStudent->mat = ident;
	newStudent->nome = name;
	return newStudent;
}

/*

*/
void incluirDesordenado(Aluno *e) {
    if (pos < arraySize) {
        lista[pos] = *e;
		pos++;
	}
}

// Retorna a posicao do elemento procurado
int procura(int mat) {	
    for (int i = 0; i < arraySize; i++) {
        if (lista[i].mat == mat) {
			return i;
		}
	}
	return -1;
}

// Recebe a posicao e imprime o elemento na tela
void mostrar(int pos) {
	for (int i = 0; i < arraySize; i++) {
		if (i == pos && lista[i].mat != 0) {
			cout << "posicao: " << i << ", matricula: " << lista[i].mat << ", nome: " << lista[i].nome << endl; 
		    return;
		}
		if (i == pos && lista[i].mat == 0) {
			cout << "vazio" << endl;
		}
	}
}

// Mostra TODOS os elementos da lista
void mostra() {    
    for (int i = 0; i < arraySize; i++) {
		if (lista[i].mat != 0) {
			cout << "matricula: " << lista[i].mat << " , nome: " << lista[i].nome << endl;
		}
	}
}

// Estratégia 1: colocar o último elemento da lista na posição do elemento removido
void remover00(int pos) {
    // for (int i = 0; i < arraySize; i++) {
	// 	if (i == pos) {
	// 		Aluno studentPos = lista[i];
	// 		lista[arraySize - 1] = studentPos;
	// 		studentPos = lista[arraySize - 1];
	// 	}
	// }
}

// Estratégia 2: mover TODOS os elementos que estão após o elemento que deve ser removido UMA POSIÇÃO A FRENTE.
void remover01(int index) {
    // It is needed to make sure that the position is inside the reach of the target array
	if (pos >= 0 && pos < arraySize) {
		pos--;
		// From the point where position is, the indexes after it will be moved 1 index forward
		for (int i = index; i < arraySize - 1; i++) {
            lista[i] = lista[i + 1];
		}
	}
}

int main() {
    Aluno *ptrStudent = newStudent(1, "Ana");
	incluirDesordenado(ptrStudent);
	ptrStudent = newStudent(2, "Ena");
	incluirDesordenado(ptrStudent);
	ptrStudent = newStudent(3, "Ina");
	incluirDesordenado(ptrStudent);
	
	mostra();
	
	cout << procura(1) << endl;
	cout << procura(2) << endl;
	
	mostrar(0);
	mostrar(1);
	mostrar(2);
	mostrar(3);

	mostra();
	
    remover01(2);
    
	cout << "\n=====\n";
	mostra();

	return 0;
}
