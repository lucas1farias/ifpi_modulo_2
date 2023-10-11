


/*
    Correção da modelagem do hotel (adição do recurso: reservas)
    Apresentação do conteúdo: Agregação
*/

function um_dez() {
    /*
    RESERVA é, a princípio um RELACIONAMENTO (depende de HOSPEDE, APTO)
    ========== DETALHE: não se reserva quarto, se reserva categoria ==========
    Quando se reserva, se quer um apartamento que faça parte de uma categoria
    O potencial hospede não escolhe um apartamento pelo seu número mas por sua categoria
    E nesta modelagem, existe uma entidade CATEGORIA 
    
    ========== SUPOSIÇÃO ==========
    Supondo que num hotel haja 5 apartamentos de categoria "standard" disponíveis
    1 pessoa fez uma reserva para um apartamento "standard"
    Alguém reserva um quarto "standard"
    Até a quarta pessoa, existe a possibilidade de conseguir se hospedar
    A quinta pessoa não consegue se hospedar, pois existe um total de 1 reserva
    Se a quinta pessoa não for a dona da reserva, não poderia se hospedar
    */
}

function dez_vinte() {
    /*
    Existe esse relacionamento: HOSPEDE <reserva> CATEGORIA

    ========== HOSPEDE & CATEGORIA (2 entidades) ==========
    Um hospede pode reservar 1 ou várias categorias de apt. ao longo do tempo (1:N)
    Um categoria pode ser reservada por 1 ou vários hospedes ao longo do tempo (1:N)
    
    ========== HOSPEDE & RESERVA (1 entidade, 1 relacionamento) ==========
    Uma reserva (seu código) se relaciona com quantos hospedes? (1:1)
    Um hospede pode efetuar quantas reservas ao longo do tempo? (1:N)

    ========== CATEGORIA & RESERVA (1 entidade, 1 relacionamento) ==========
    Uma reserva (seu código) se relaciona com quantas categorias? (1:1)
    Uma categoria pode pertencer a quantas reservas ao longo do tempo? (1:N)
    Dependende da lógica do negócio, normalmente: qtd. de apts. = qtd. de reservas

    ========== DETALHE IMPORTANTE SOBRE CARDINALIDADE ==========
    O contexto atual: | HOSPEDE | ----- <reserva> ----- | CATEGORIA |
    Um hospede reserva uma categoria de hotel
    Primeiro foi feita a cardinalidade entre as entidades
    Depois a cardinalidade das entidades com seu relacionamento alvo
    
    ========== CARDINALDADE ENTRE: ENTIDADES ==========
    (1:N) e (1:1) = a de (1:N) recebe a chave primária do (1:1) como chave estrangeira

    ========== CARDINALDADE ENTRE: ENTIDADE e RELACIONAMENTO ==========
        (N:N) = havendo qualquer muitos p/ muitos, o relacionamento (aqui: RESERVA) é 
        convertido em entidade, e as entidades anteriores (HOSPEDE e CATEGORIA) recebem
        novos relacionamentos entre elas, pois entidades não se conectam de forma 
        direta
        (1:N) = o relacionamento continua sendo relacionamento
    
    { 13:15 até 15:05 }: Explicação sobre algo que têm a ver com a reserva

    Surgimento da entidade SERVIÇO e SOLICITAÇÃO
    Regra de negócio: cada serviço gera uma solicitação
    Regra de negócio: é preciso saber qual funcionário fez a solicitação do serviço
    */
}

function vinte_trinta() {
    /*
    ================================================================
    Quem solicita o serviço, é o hospede quando está num apartamento
    Quem representa as duas coisas? HOSPEDAGEM
    Portanto: | SERVICO | ----- <solicitar> ----- | HOSPEDAGEM |
    ================================================================

    ========== CARDINALIDADE (entidade: SERVICO, relacionamento: HOSPEDAGEM) ==========
    1 serviço se relaciona com 1 ou várias hospedagens (1:N)
    1 hospedagem se relaciona com 0 ou vários serviços (0:N)

    ========== 23:40 ==========
    Menção: Agregação / entidade associativa
    Surge aqui num contexto de que não se pode ligar relacionamento com relacionamento 
    Os relacionamentos: <HOSPEDAGEM> e <SOLICITAR>
    Com agregação:      |<HOSPEDAGEM>| ----- <SOLICITAR> (HOSPEDAGEM vira entidade)

    ========== 26:00 ==========
    A agregação só surge quando se têm pelo menos um relacionamento ternário

    ========== RELACIONAMENTO: <SOLICITAR> (exemplo de uso) ==========
    cód. solicit    cód. hospedagem    cód. servico
    1               2203               1
    2               2203               2
    3               2204               5
    4               2204               2

    Aqui é onde acontece a associação dos serviços às hospedagens
    A mesma hospedagem usar mais de um serviço
    Um serviço ser usado por mais de uma hospedagem

    ========== 28:00 ==========
    O relacionamento <SOLICITAR> faz sentido ter um atrib. "qtd do servico"
    cód. solicit    cód. hospedagem    cód. servico    qtd
    1               2203               1               2
    */
}

function trinta_quarenta() {
    /* 
    | < HOSPEDAGEM > | é ao mesmo tempo: entidade e relacionamento

    ========== RELACIONAMENTO: (entidade: HOSPEDAGEM, entidade: SERVICO) ==========
    Num código de hospedagem pode ser solicitado 0 ou vários sérviços (0:N)
    Um serviço pode ser soliticado por 1 ou várias hospedagens (1:N)

    ========== CARDINALIDADE: |HOSPEDAGEM| & <SOLICITAR> ==========
    1 hospedagem pode se relacionar com 0 ou várias solicitações (0:N)
    1 solicitação (seu código) solicita 1 e somente 1 hospedagem (1:1)

    ========== CARDINALIDADE: |SERVICO| & <SOLICITAR> ==========
    1 Serviço pode ser solicitado 1 ou várias vezes (1:N)
    1 solicitação (seu código) solicita 1 e somente 1 serviço (1:1) (Regra do negócio)
    
    ========== 34:20 ==========
    Menção: Erro de (N:N) entre ENTIDADE & RELACIONAMENTO
    Inicialmente: | PRODUTO | ----- < VENDA >
    Ao verificar a cardinalidade, o resultado é (1:N) (1:N) = (N:N) (não pode)
    Então, se faz: | PRODUTO | ----- < item venda > ----- | VENDA |
    Ao verificar a cardinalidade, o resultado é (1:N) (1:N) = (correto)
    Cardinalidade entre ENT. & REL (1:N) (1:N) = errado (converter rel. em entidade)
    Cardinalidade entre ENT. & ENT. (1:N) (1:N) = correto

    ========== CARDINALIDADE: |SERVICO| & |FUNCIONARIO| ==========
    1 serviço pode ser solicitado por 1 ou vários funcionários (1:N)
    1 funcionário pode solicitar 1 ou vários serviços (1:N)
    RELATÓRIO || correto (pois os dois deram 1:N)
    AçÃO      || chaves (1:N) |SERVICO| e |FUNCIONARIO| referenciadas em <SOLICITAR>

    ========== CARDINALIDADE: |FUNCIONARIO| & <SOLICITAR> ==========
    1 funcionário pode fazer 1 ou várias solicitações de serviço (1:N)
    1 solicitação (seu código), só pode ser feita por um 1 funcionário (1:1)
    RELATÓRIO || correto (pois, não deu 2 1:N)
    AçÃO      || chave de (1:N) |FUNCIONARIO| referenciada em (1:1) <SOLICITAR>
    */
}

function quarenta_cinquenta() {
    /*
    ========== 45:40 ==========
    Preenchimento dos atribs. de <SOLICITAR>
    Pela cardinalidade, <SOLICITAR> recebe a maioria das chaves dos || vinculados

    ========== 47:25 ==========
    Construção do atrib. "valor total" em <SOLICITAR>
    */
}
