

function cliente() {
    // Primeira entidade
}

function produto() {
    // Segunda entidade
    /*
        cód. do produto
        nome
        qtd.
        descr.
        preço de venda
    */
}

function estoque() {
    /*
    cód. do produto
    nome do produto
    qtd.
    */
}

function preco_de_compra() {
    /* Esse atrib. não fica na tabela "produto"
       O preço é cadastrado na hora que é feita a compra
       O vendedor faz um pedido de compra pra um fornecedor
       Na hora que eu compro, eu registro o preço
    
       São feitas compras por fornecedores != ou pelo mesmo
       fornecedor em tempos !=. Na listagem dos produtos 
       simialres, não significa que todos tenham sido comprados
       no mesmo intervalo, com preço similar

    */
}

function vendedor() {
    // Terceira entidade
}

function venda() {
    /*
        código da venda
        código do produto
        código do cliente
        data da venda
        quantidade vendida
        valor total

        Simulação de uma compra: pincel (id=1), apagador

        cv    cp    cc    dv          qv    vt
        1     1     x     19/09/23    2     10

        Ao registrar o pincel, não se vê um problema
        Ao tentar registrar o apagador, vemos um problema, pois "cv" se repete
        Como solucionar?
    */
}

function fornecedor() {
    /*
    
    */
}

function detalhes() {
    /*
    . Uma entidade pode estar ligada a mais de um relacionamento
    . Entidades não se ligam diretamente, há sempre um "rel." entre elas (podendo não haver atribs.)
    . Relacionamento não se ligam diretamente, há sempre uma "ent." entre elas
    . O nome dos relacionamento não é importante, mas os seus atribs.
    */
}

function relatorios() {
    /*
    Consultas que não geram tabelas
    Perguntas que esperam ser respondidas
    */
}

function segundo_passo() {
    /*
    . Escolher duas entidades que se relacioname diretamente,
    as que sejam mais óbvias (relação direta)
    . A relação inicial mais óbvia: Cliente e Produto
    . Primeiro é feita e cardinalidade entre "entidades"
    . Ao longo do tempo, cliente rel. produto (1:N) (um ou vários)
    . Ao longo do tempo, produto rel. cliente (1:N) (um ou vários)
    . Se eu tenho 10 produtos iguais, eu só tenho um código
    */
}

function cardinalidades() {
    /*
    . (A) Cardinalidade entre entidades (registro permanente no modelo)
    . (B) Cardinalidade entre entidade & relacionamento
    
    . (A) existe um relacionamento entre elas
    . (A) se cria um registro PERMANENTE no modelo (1:N, N:N, 1:1)
    . (B) se cria um registro TEMPORÁRIO para saber se o rel. está correto
    */
}

function cardinalidade_problema() {
    /*
    . A verificação do "tipo B" é muito importante apesar de não ser registrável
    . Por ela se percebe se a relação criada entre "ent" e "rel." está correta
    . O correto é que ao verificar uma "ent." com "rel.", o resultado seja (1:N)
    . O exemplo abaixo mostra um erro de modelagem (existe 1 que não é 1:N)
    
    (Ex) Entidades: [Cliente, Produto] & Relacionamento: [Venda]
        cliente rel. venda: (1:N)
        venda rel. cliente: (1:1)
        produto rel. venda: (1:N)
        venda rel. produto: (1:N)

    . A solução seria criar uma tabela associativa
    */
}

function tabela_associativa() {
    /*
    . No modelo "entidade relacionamento" não deve exister (N:N)
    . Se isso acontece, uma tabela associativa se faz necessária
    . Então, o que era "rel." até o momento, se torna "ent."
    . Um novo "rel." é criado e passa a existir entre a "ent. antiga" e a "ent. nova"
    . A "ent. nova" antes era um "rel." 
    
    . Ex:
        (ANTES)  | CLIENTE | ----- < VENDA >
        (DEPOIS) | CLIENTE | ----- < FAZ > ----- | VENDA |

    . Antes, o "rel." era "VENDA", que passou a ser "ent."
    */
}

// Parada: 56:40
function entidadesDetectadas() {
    /*
        . | CLIENTE |    | PRODUTO |    | VENDEDOR |    | FORNECEDOR |
        . Relacionamento mais óbvio: | CLIENTE |    <>    | PRODUTO |
        . Usando a prespective do dono da loja: | CLIENTE | ----- < VENDA > ----- | PRODUTO |

        ========== CARDINALIDADE (entidades) (cliente) & (produto) ==========
        . | CLIENTE | ----- < VENDA > ----- | PRODUTO |
        . Não deve ter algo diferente de (1:N)
        . Ao longo do tempo, um cliente pode se relacionar com quantos produtos? (1:N)
        . Ao longo do tempo, um produto pode se relacionar com quantos clientes? (1:N)
        
        ========== Atribs. da "entidade": VENDA (pensamento hipotético) ==========
        código da venda
        código do produto
        código do cliente
        data da venda
        quantidade vendida
        valor total
        
        ========== SIMULAÇÃO DE COMPRA USANDO ENTIDADE VENDA ==========
        . pincel (id=1)
        . apagador (id=2)

        cv    cp    cc    dv          qv    vt
        1     1     x     19/09/23    2     10
        
        ========== PROBLEMA ==========
        Ao registrar o pincel, não se vê problema
        Ao tentar registrar o apagador, vemos um problema, pois "cv" se repete
        Como solucionar?

        ========== CARDINALIDADE (entidade e relacionamento): (cliente, produto) & (venda) ==========
        . Não é registrável no modelo, mas serve para consultar se o relacionamento está correto
        . Compara uma ou mais entidades com o seu relacionamento mais direto
        . Exemplo: | CLIENTE | ----- < VENDA > ----- | PRODUTO |
        . Aqui temos um relacionamento < VENDA > em relação direta com CLIENTE e PRODUTO
        . Não pode haver algo diferente de (1:N)
        . Ao longo do tempo, um cliente pode se relacionar com quantas vendas? (1:N)
        . Ao longo do tempo, uma venda pode se relacionar com quantos clientes? (1:1) (O QUE É ERRADO)
        . Ao longo do tempo, um produto pode se relacionar com quantas vendas? (1:N)
        . Ao longo do tempo, uma venda pode se relacionar com quantos produtos? (1:N)

        ========== SOLUÇÃO ==========
        . Conversão do relacionamento VENDA em entidade, e criar um relacionamento QUALQUER sem atribs. 
        . | CLIENTE | ----- < FAZ > ----- | VENDA |
        . A chave de CLIENTE irá ser usada em VENDA
        
        44:25
        ========== ENTIDADE VENDA ==========
        código da venda
        código do cliente
        data
        
        45:20
        ========== ENTIDADE ITEM VENDA ==========
        . Entidade que serve para colocar o item de cada venda
        chave dela
        código da venda
        código do produto
        quantidade
        
        46:10
        ========== SIMULAÇÃO DE VENDA ==========
        . No ato de vender, se deve preencher as duas tabelas
        
        . O lado do cliente
        cv    clt    data
        1     x      19/09/23
        
        . Itens da venda
        cd    cv    cp   qtd
        1     1     a    3
        2     1     b    1
        3     1     c    1
        
        ========== 47:50 ==========
        . Supondo que o cliente vá outro dia ao mesmo mercado
        cv    clt    data
        211   x      01/11/23

        cd       cv     cp    qtd
        10066    211    f     5

        ========== 54:10 ==========
        . Como se diferencia as entidades VENDA e ITEM DA VENDA?
        . Numa nota fiscal, o cabeçalho da nota é a VENDA, o corpo da nota é ITEM DA VENDA
    
        ========== 55:30 ==========
        . Menção à entidade VENDEDOR
        . Essa entidade têm relação direta com a nova entidade: VENDA
        . Como os dois são entidades, é preciso um relacionamento entre elas
        . O relacionamento se chamará REALIZA
        . | VENDA | ----- < REALIZA > ----- | VENDEDOR |
    */
}