

/*
    2. No exemplo, percorra a "frase" e imprima os valores
    caractere a caractere na tela do computador. O laço de
    repetição deve percorrer "frase" até que ele encontre o 
    final da string (caractere especial para fim da string 
    igual a '\0')
*/

#include <iostream>

int tamanho(const std::string colecao) {
    size_t i = 0;
    while (colecao[i] != '\0') {
        i++;
    }
    return i;
}

void percorrer(const std::string colecao) {
    std::cout << "\n{\n";
    for (size_t i = 0; i < tamanho(colecao); i++) {
        std::cout << "    " << colecao[i] << ",\n";
    }
    std::cout << "\n}";
}

char frase[20] = "uma frase";

int main() {
    percorrer(frase);
    return 0;
}