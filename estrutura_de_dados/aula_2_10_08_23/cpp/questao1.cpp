

/*
    1. No programa abaixo, complete o código calculando e 
    imprimindo qual o tamanho da cadeia de caracteres que foi 
    incluída pelo usuário
*/

#include <iostream>

int meu_strlen(const std::string palavra) {
    size_t i = 0;
    while (palavra[i] != '\0') {
        i++;
    }
    return i;
}

char frase[20];

int main() {
    std::cout << "Escreva uma palavra >>>" << '\n';
    std::cin >> frase;
    std::cout << meu_strlen(frase);
    return 0;
}
