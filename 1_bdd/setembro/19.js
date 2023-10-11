

function um_dez() {
    /*
    ========== (01:30) ========== Detecção entidade |CLIENTE|
    ========== (01:45) ========== Detecção entidade |PRODUTO|

    ========== (02:20) ==========
    PERGUNTA || ESTOQUE é entidade?
    RESPOSTA || não, é atrib.
    DETALHE  || é atrib. de |PRODUTO| se 1 loja
    
    ========== (07:30) ==========
    DETALHE || ESTOQUE só é |ESTOQUE| em caso de rede de lojas
    MOTIVO  || saber a qtd. de produtos em cada LOJA

    ========== (09:15) ==========
    Eu posso ter feito várias compras em fornecedores e períodos !=, então, por mais que 
    eu venda todos por um preco "X", esses produtos podem não ter sido comprados no 
    mesmo instante e pelo mesmo preço

    ========== (09:55) ==========
    O preço é cadastrado na hora da compra após a compra pelo fornecedor
    */
}

function dez_vinte() {
    /*
    ========== DISCUSSÃO: preço de compra (atrib.) ==========
    O suposto atrib. "preco compra" deve estar em algum
    lugar (entidade/rel.) quando estiver cadastrando as 
    compras dos fornecedores

    ========== 13:15 ==========
    Detecção entidade |VENDEDOR|
    DETALHE   || req. p/ venda: cliente, produto, vendedor
    CONCLUSÃO || Venda é provavelmente <VENDA> (rel.)

    ========== MODELO PROVISÓRIO ==========
    |CLIENTE|    |PRODUTO|    |VENDEDOR|    <VENDA>
    <VENDA> liga as supostas 3 entidades

    ========== 14:15 ==========
    Detecção entidade |FORNECEDOR|

    ========== 15:05 ==========
    COMPRA é uma entidade?
    DETALHE || req. p/ compra: prod., fornecedor, vendedor
    DETALHE || "vendedor" = |FUNCIONARIO| que faz a compra
    DETALHE || |FUNCIONARIO| = faz a compra e venda
    DETALHE || |FUNCIONARIO| = conectado a 2 rels.

    ========== 19:05 ==========
    Aplicação da regra 2 da modelagem
    REGRA     || selecionar 2 || óbvias e estudar sua card.
    ENTIDADES || |CLIENTE| & |PRODUTO| (rel. direta)
    */
}

function vinte_trinta() {
    /*
    ========== CONCLUSÃO ==========
    RELACIONAMENTO || |CLIENTE| <VENDA> |PRODUTO|
    DETALHE        || Pela perspectiva do dono da loja, um cliente cria uma <VENDA>

    ========== CARD.: |CLIENTE| e |PRODUTO| ==========
    1 cliente faz venda com 1 ou vários produtos (1:N)
    1 produto é comprado por 1 ou vários clientes (1:N)
    RELATÓRIO || correto (ambos deram 1:N)
    AÇÃO      || ambas chaves (1:N) ref. em <VENDA>

    ========== 26:55 [SIMULAÇÃO atribs.] <VENDA> ==========
    cód. vd.    cód. prod.    cód. clt    dt. vd.    qtd    valor t.
    1           1             x           19/09/2023 3      10
    
    PROBLEMA || repetição do cód. venda ao tentar add. um segundo produto
    */
}

function trinta_quarenta() {
    /*
    ========== CARD.: |CLIENTE| e <VENDA> ==========
    1 cliente faz 1 ou várias vendas (1:N)
    1 venda (seu código) se vincula a 1 e somente 1 cliente (1:1)
    RELATÓRIO || correto (não deu 2 1:N)
    
    ========== CARD.: |PRODUTO| e <VENDA> ==========
    1 produto faz parte de 1 ou várias vendas (1:N)
    1 venda (seu código) se vincula a 1 ou vários produtos (1:N)
    RELATÓRIO || errado (ambas deram 1:N)

    ========== Modelo errado (que será corrigido) ==========
    MODELO ERRADO || |CLIENTE| <venda> |PRODUTO|
    MOTIVO        || (1:N) duplicado na cardinalidade entre: <venda> |PRODUTO|
    PASSO 1       || Converter <venda> p/ |VENDA|
    NOVO LAYOUT   || |CLIENTE| |VENDA| |PRODUTO|
    PROBLEMA      || Entidades não podem estar ligadas sem um rel. entre elas
    NOVO LAYOUT   || |CLIENTE| <> |VENDA| <item_venda> |PRODUTO|

    ========== CARD.: |VENDA| (antes entidade) e |PRODUTO| ==========
    1 venda contêm 1 ou vários produtos (1:N)
    1 produto pode estar em 1 ou várias vendas (1:N)
    RELATÓRIO || correto (ambas 1:N)
    AÇÃO      || chaves de ambos ref. em <item_venda>

    ========== 35:30 (Tabela Associativa) ==========
    Tabela que surge como resultado de cardinalidade incorreta entre [ <> e || ]
    ANTES  || <rel.> |ent.|
    AGORA  || |ent.| e |ent.|
    AÇÃO   || um novo <rel.> deve estar entre as entidades (tabela associativa)
    DEPOIS || |ent.| <rel.> |ent|  
    */
}

function quarenta_cinquenta() {
    /*
    ========== 42:35 (Tabela Associativa) (continuação) ==========
    PARADA        || |VENDA (antes <>)| <item_venda> |PRODUTO|
    CARDINALIDADE || (1:N) de (1:N)
    CONCLUSÃO     || <item_venda> recebe ambas chaves

    ========== CARD.: |CLIENTE| & |VENDA| ==========
    A cardinalidade anterior estava certa quando |VENDA| era <rel.>
    Só que agora <VENDA> é |ent.|, então a cardinalidade precisa ser refeita
    ATUAL     || |CLIENTE| <c/v> |VENDA|
    1 cliente efetua 1 ou várias vendas (1:N)
    1 venda é registrada por 1 e somente 1 cliente por vez (1:1)
    RELATÓRIO || correto
    AÇÃO      || (1:1) |CLIENTE| ref. em (1:N) |VENDA|

    ========== 44:20 (simulação dos atribs. de |VENDA| e <item_venda>) ==========
    |VENDA|
    cód_venda    cód_cliente    data_venda  
    1            x              19/09/23  
    
    DETALHE || O atrib. "cód_cliente" existe devido (1:1) de |CLIENTE| -> |VENDA|
    DETALHE || Observe que cada registro é uma compra, mas os itens não estão nela
    DETALHE || Os itens se encontram em <item_venda>
    
    <item_venda>
    cód_iv    cód_venda    cód_prod    qtd
    1         *1            1           2
    2         *1            2           3

    DETALHE || Cada produto de cada venda é inserido, repetindo somente a CE "cód_venda"
    DETALHE || Cada id de <item_venda> é um item de uma compra (*CE se repetem)
    DETALHE || <item_venda> total vendido por produto
    DETALHE || |VENDA| total vendido por venda 
    */
}

function cinquenta_sessenta() {
    /*
    ========== (52:45) CARD.: |VENDA| & <item_venda> ==========
    1 venda pode ter 1 ou várias linhas de item (1:N)
    1 linha de item só pertence a 1 e somente 1 venda (1:1)
    DETALHE   || 1 linha de item não consegue pertencer a + de 1 venda ao mesmo tempo
    RELATÓRIO || correto (<rel.> deu 1:1)
    AÇÃO      || chave (1:N) |VENDA| ref. em (1:1) <item_venda> 

    ========== CARD.: |PRODUTO| & <item_venda> ==========
    1 produto pode se repetir em 1 ou várias linhas de item (1:N)
    1 linha de item só pode representar 1 e somente 1 produto (1:1)
    RELATÓRIO || correto (<rel.> deu 1:1)
    AÇÃO      || chave (1:N) |PRODUTO| ref. em (1:1) <item_venda>

    ========== (54:15) Detalhe sobre: <item_venda> =========
    Basicamente, |VENDA| = cabeçalho da nota, <item_venda> = corpo da NF

    ========== (55:30) CARD.: |VENDEDOR| & |VENDA| ==========
    |VENDEDOR| se relaciona com |VENDA|
    ATUAL || |VENDA| <realiza> |VENDEDOR|
    1 vendedor pode efetuar 1 ou várias vendas (1:N)
    1 venda é realizada por 1 e somente 1 vendedor por vez (1:1)
    RELATÓRIO || correto 
    AÇÃO      || chave (1:1) |VENDEDOR| ref. em (1:N) |VENDA|
    DETALHE   || <realiza> fica sem CEs

    ========== (59:10) ==========
    Detecção de relacionamento entre |FORNECEDOR| <compra> |PRODUTO|
    1 produto é fornecido por 1 ou vários fornecedores (1:N)
    1 fornecedor fornece 1 ou vários produtos (1:N)
    */
}

function sessenta_setenta() {
    /*
    ========== CARD.: |PRODUTO| & <compra> ==========
    1 produto pode fazer parte de 1 ou várias compras (1:N)
    1 compra pode envolver 1 ou vários produtos (1:N)
    RELATÓRIO || errado (chave 1:N no rel.)
    AÇÃO      || converter <compra> em |COMPRA|
    
    ========== CARD.: |FORNECEDOR| & <compra> ==========
    1 fornecedor pode estar envolvido com 1 ou várias compras (1:N)
    1 compra (seu código) envolve 1 e somente 1 fornecedor (1:1)
    RELATÓRIO || certo (1:1 encontrado no rel.)
    AÇÃO      || chave (1:N) |FORNECEDOR| ref. em (1:1) |COMPRA|

    ========== PROCEDIMENTO ==========
    Agora que <compra> não deu certo com |PRODUTO|, ela precisa se tornar |COMPRA|
    Mas <compra> deu certo com |FORNECEDOR|, então |COMPRA| recebe a chave de |FORNECEDOR|
    
    ========== CARD.: |FORNECEDOR| <f/c> |COMPRA| ==========
    1 fornecedor é capaz de fazer 1 ou várias compras (1:N)
    1 compra só pode envolver 1 fornecedor por vez (1:1)
    RELATÓRIO || correto 
    AÇÃO      || (1:1) |FORNECEDOR| ref. em (1:N) |COMPRA|

    ========== CARD.: |PRODUTO| <item_compra> |COMPRA| ==========
    1 produto pode fazer parte de 1 ou várias compras (1:N)
    1 compra pode ter 1 ou vários produtos (1:N)
    RELATÓRIO || correto (ambos deram 1:N)
    AÇÃO      || ambos (1:N) ref. em <item_compra>

    ========== CARD.: |VENDEDOR| <v/c> |COMPRA| ==========
    OBS || "vendedor" neste EC = pessoa que compra do fornecedor e vende p/ o cliente
    1 vendedor pode efetuar 1 ou várias compras (1:N)
    1 compra só pode levar o nome de 1 e somente 1 vendedor (1:1)
    RELATÓRIO || correto
    AÇÃO      || (1:1) |VENDEDOR| ref. em (1:N) |COMPRA|
    */
}

function oitenta_noventa() {
    /*
    ========== (01:23:10) ==========
    Numa venda, por exemplo, supermercado (ou qualquer outra), existem casos em que
    o comprador/cliente muda de idéia e resolve inserir mais um produto. O que gera
    a seguinte questão?

    - O produto deve ser inserido normalmente? 
        Sim, a nível de programação, é possível verificar se o produto a ser add já 
        existe na venda (no caso, seu código). Se sim, ele é somente incrementado, ao 
        invés de criada uma nova inserção, mas isto pode gerar um custo computacional
        desnecessário.
    
    - E então?
        Fazer a inserção sem verificar, uma nova linha é gerada em <item_venda> e evita
        requisições que, dependendo do contexto, podem ser muitos pesadas
    */
}

function cento_e_vinte_cento_e_trinta() {
    /*
    ========== (02:07:55) ==========
    . Início do novo EC: continuação modelagem hotel (adição do recurso reserva)
    . Uma "reserva", costuma ser um <rel.> e envolve a idéia de fila, onde se espera
    obter o primeiro elemento que se tornar disponível 
    */
}
