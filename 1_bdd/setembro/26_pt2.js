

function um_dez() {
    /*
    Uma loja = venda de um produto p/ o cliente
    Rede de lojas = venda de um produto de uma loja p/ o cliente
    É preciso saber quais são as lojas e seus respectivos produtos, sabendo suas qtd.
    Estoque não é uma ENTIDADE, mas um ATRIB. "qtd." de alguma outra ENTIDADE
    (opinião) "qtd" seria na entidade "PRODUTO" se for uma loja
    Um produto se relaciona com quantas lojas? (1:N) (produto = nome do produto)
    Ex: Big Mack
    Uma loja pode ter quantos produtos? (1:N)
    Então esse relacionamento existe
    ***** ESTOQUE: Produto x, na loja A, na filial não sei de onde, têm 10 produtos
    É nessa tabela aqui (ESTOQUE) que eu vou controlar os estoque de cada loja
    Aqui recebe a chave do produto, chave da loja, qtd.
    Qual seria o nome apropriado? Estoque
    Se eu vender o produto, aqui eu venderia o produto x, mas de que loja?
    Você vende produto, mas se você vende o produto x, vende de qual loja? não têm como saber
    Você vende a loja? não, você vende o produto de uma loja
    Onde é o produto de uma loja? estoque
    O seu cliente, é o produto de uma loja
    Então essa venda, na verdade, está ligada a ESTOQUE
    Eu tenho que vincular os produtos as lojas, por isso foi associado LOJA a PRODUTO
    Do relaconamento entre LOJA e PRODUTO nasce ESTOQUE: cód. produto, cód. da loja, qtd
    A quantidade depende da loja
    */
}

function dez_vinte() {
    /*
    É dito que algo na modelagem se tornará agregação
    (PRODUTO) cód. produto, nome, valor (valor em caso de loja)
    Em redes de loja, o atrib. "valor" iria para outra ENTIDADE (acho que é p/ VENDA)
    Se o "valor" é único pra toda a rede de lojas, então "valor" fica em "PRODUTO"
    Se o "valor" depende da loja, fica na ENTIDADE não mencionada (apontada na aula)
    Nesse ESTUDO DE CASO, OS PREÇOS SÃO IGUAIS PRA TODA A REDE DE LOJAS
    Simulação de cadastro: 
        1 / sanduíche Bick Mack
        2 / coca-cola
        3 / batata-frita
    O COMBO é um produto assim como todos os outros produtos (autorelacionamento)
    COMBO = autorelacionamento de PRODUTO com PRODUTO
    Um produto pode compor quantos COMBOS? (1:N)
    Um produto COMBO pode se relacionar com quantos produtos? (1:N)
    Se é (1:N) COMBO recebe: 2 chaves de produto (cód. produto combo, cód. produto)
    17:50
    Simulação da TABELA COMBO
        ex. de combo: (1 sanduíche, 1 coca) (2 sanduíches e 2 cocas)
        cód. combo    cód. prod. combo    cód. prod.    qtd
        1             4                   1             1
        2             4                   2             1
        1             5                   1             2
        2             5                   2             2
    Um combo sendo formado por mais de 1 produto
    Um produto compondo mais de um combo
    Auto-relacionamento (ex.): time com time
    */
}

function vinte_trinta() {
    /*
    Auto-relacionamento (ex.): Sistema de supervisão (Aluno se relacionando com outro)
    Um aluno pode supervisionar 1 ou vários alunos (1:N)
    Um aluno pode ser supervisionado por 1 ou vários alunos (1:N)
    Auto-relacionamento (ex.): Pré-requisito (Disciplina com outra)
    O COMBO é um produto que se relaciona com outro produto
    Foi dito que PRODUTO e LOJA foi finalizado
    CLIENTE compra um PRODUTO de uma LOJA (contexto de rede de lojas)
    CLIENTE está ligado a ESTOQUE
    Um produto de uma loja pode se relacionar com quantos clientes (1:N)
    Um cliente da loja X, pode se relacionar com quantos produtos? (1:N)
    Utilização da agregação
    Um cliente se relaciona com quantas vendas? (1:N)
    Uma venda se relaciona com quantos clientes? (1:1)
    Uma venda se relaciona com quantos produtos? (1:N)
    Um produto de uma loja se relaciona com quantas vendas? (1:N)
    */
}

function trinta_quarenta() {
    /*
    ========== CARDINALIDADE: |CLIENTE| & <VENDA> ==========
    1 cliente faz 1 ou várias vendas (1:N)
    1 venda (seu código) se relaciona com 1 e somente 1 cliente (1:1)
    RELATÓRIO || correto (pois não deu 2 1:N)
    AÇÃO      || chave de (1:N) |CLIENTE| referenciada em (1:1) <VENDA>

    ========== CARDINALIDADE: |PRODUTO| & <VENDA> ==========
    1 produto de uma loja pode ser vendido em 1 ou várias vendas (1:N)
    1 venda (seu código) se relaciona com 1 ou vários produtos (1:N)
    RELATÓRIO || errado (os dois deram 1:N)
    AÇÃO      || <VENDA> se torna |VENDA| e novos || entre |CLIENTE| e |PRODUTO|
    
    ===== Início da análise de FUNCIONARIO =====
    Um funcionário faz vendas, então este se liga com venda
    Um funcionário se relaciona com várias vendas (1:N)
    Uma venda (seu código atual) se relaciona com quantos funcionários? (1:1)
    Criação do relacionamento V/F (entre VENDA e FUNCIONÁRIO) sem atribs.
    Aparentemente, no relacionamento que for (1:1) recebe a chave do que está (1:N)
    Então, a chave de "FUNCIONARIO" é referenciada em "VENDA"
    O produto de uma loja está sendo vendido, mas até agora eu não sei os funcionários
    Como se faz pra saber? ligar/relacionar FUNCIONARIO & LOJA
    É preciso saber qual FUNCIONARIO pertence a qual LOJA (relação)
    
    ===== CARDINALIDADE: |LOJA| & |FUNCIONARIO| =====
    1 funcionário trabalha em 1 e somente 1 loja (1:1)
    1 loja pode ter 1 ou vários funcionários (1:N)
    RELATÓRIO || correto
    AÇÃO      || chave de 1:1 |LOJA| referenciada em 1:N |FUNCIONARIO|
    DETALHE   || se ambas fossem (1:N), ambas chaves referenciadas no <L/F>
    DETALHE   || o funcionário precisa ser impedido de vender produtos de outra loja
    AÇÃO      || no ato da venda, verificar: cód. loja == cód. loja do vendedor
    
    ===== Início da análise de CLIENTE (especialização/generalização) =====
    especialização = dividir em categorias específicas
    CLIENTE é uma entidade divisível (pessoa física e jurídica)
    Se todos os atribs. ficassem numa mesma tabela, muitos campos ficariam vazios
    Os atribs. em comum ficam em CLIENTE
    Os atribs. diferentes se dividem em duas novas entidades: FISICA, JURIDICA
    Porém, os atribs. de FISICA e JURIDICA também incluem os de CLIENTE
    */
}

function quarenta_cinquenta() {
    /*
    ===== IMPORTANTE =====
    Só há especialização se existir atribs. não comuns entre eles

    EX: Você têm um ADVOGADO, ZELADOR, PROFESSOR, onde os atribs. são: nome, salário
    Os atribs. são todos em comum, então se cria apenas uma ENTIDADE que seja lógica 
    Nesse contexto, se cria CARGO 
    */
}
