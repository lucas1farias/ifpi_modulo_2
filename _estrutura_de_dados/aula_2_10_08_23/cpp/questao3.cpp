

/*
    Leia duas strings e compare, se elas forem iguais, imprima
    "São iguais!!", senão imprima "São diferentes!!":

    a) As duas strings devem ser definidas como char[10],
       conforme abaixo:

    b) As duas strings devem ser definidas como strings, para
       isso use a biblioteca iostream do C++, conforme abaixo
*/

#include <iostream>
using namespace std;

int tamanho(string colecao) {
    size_t i = 0;
    while (colecao[i] != '\0') {
        i++;
    }
    return i;
}

bool comparar(const string strA, const string strB) {
    size_t i = 0;
    if (tamanho(strA) != tamanho(strB)) {
        return false;
    } else {
        while (strA[i] != '\0' && strB[i] != '\0') {
            if (strA[i] != strB[i]) {
                return false;
            }
            i++;
        }
    }
    return true;
}

string f1;
string f2;

int main() {
    cout << "Digite a primeira palavra >>> ";
    cin >> f1;
    cout << "Digite a segunda palavra >>> ";
    cin >> f2;
    
    if (comparar(f1, f2))
        cout << "Sao iguais";
    else
        cout << "Sao diferentes";
    return 0;
}
