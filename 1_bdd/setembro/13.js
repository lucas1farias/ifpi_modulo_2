

function assunto() {
    /*
    Correção da modelagem de uma biblioteca (v1)
    Versão sem reserva
    */
}

function um_dez() {
    /*
    Detecção |LIVRO|, |AUTOR|
    Detecção atribs.: estante, prateleira (de |LIVRO|) 
    Detecção |FUNCIONARIO|
    */
}

function dez_vinte() {
    /*
    ========== (10:20) ========== 
    QUESTÃO  || EMPRESTIMO é uma |ent.|?
    RESPOSTA || não, pois não possui somente atribs. seus, dependendo minimamente de um
    cliente/leitor e um livro, ou seja, tende a ser um relacionamento

    ========== (17:35) ==========
    Manipulação de dados: Em questões envolvendo relatórios, muitas vezes pode ser
    pensado em percorrer |ent.| afim de encontrar registros/objetos. Só que isso pode
    ou não ser uma boa opção

    Exemplo:
        Numa biblioteca, existe o recurso de "empréstimo", e é desejado um relatório
        p/ saber quantos livros um certo leitor já fez. Pode se pensar que percorrer, 
        buscando o código deste leitor é uma opção viável, mas essa tabela "emprestimo"
        pode ser gigantesca, e o CUSTO COMPUTACIONAL pode ser danoso. Uma opção que
        tende a ser viável é o uso da CRIAÇÃO DE ATRIBS. ++, neste caso, na tabela
        LEITOR, poderia existir um atrib. "qtd_emprestimos", que ++

        SIMULAÇÃO:
            TABELA: EMPRESTIMO
            cod_empr.    cod_leitor    cod_titulo
            1            1             211
            2            1             77
        
        PROCEDIMENTO:
            cod_empr.cod_leitor.qtd_emprestimos++

        VERIFICAÇÃO:
            if cod_empr.cod_leitor.qtd_emprestimos <= x:
                cadastrar_livro()
            else:
                msg("Você excedeu seu limite de empréstimos por vez")
    */
}

function vinte_trinta() {
    /*
    ========== (20:35) ==========
    QUESTÃO  || Reserva é uma |ent.|?
    RESPOSTA || não, mas pode vir a ser dependendo do contexto da modelagem
    RESPOSTA || "reserva" não tende a ser |ent.| por precisar de um leitor e um livro

    ========== (22:15) ========== 
    Fim da leitura do EC e início da modelagem

    ========== (27:05) CARD.: |LEITOR| <emprestimo> |LIVRO| ==========
    1 leitor faz empréstimo de 1 ou vários livros (1:N)
    1 livro (seu código) pode ser emprestimado p/ 1 ou vários leitores (1:N) 
    RELATÓRIO || correto (ambos são 1:N)
    AÇÃO      || ambos (1:N) ref. no <rel.>

    ========== (29:10) CARD.: |LEITOR| <emprestimo> ==========
    1 leitor pode fazer 1 ou vários empréstimos (1:N)
    1 empréstimo (seu código) só está ligado a 1 e somente 1 leitor (1:1) 
    RELATÓRIO || correto (<rel.> deu 1:1)
    AÇÃO      || chave (1:N) |LEITOR| ref. em (1:1) <emprestimo>
    */
}

// 00:30:05
