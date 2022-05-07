# HausMenu

* Preencho cardápio
* confiro as receitas e vejo os ingredientes
* confiro se tem na despensa e a quantidade e se a validade vai tá boa
* Com o que sobrar, insiro na lista de compras

#### TABELA USUÁRIOS - OK OK
* Cadastro (POST)
    * email
    * senha
    * enviar email de boas vindas

* Login (POST)
    * email
    * senha
    * esqueci minha senha
        * manda a senha por email (por enquanto)

* Atualizar usuário (PUT) e Ver os dados do perfil (GET)
    * Nome
    * Tipo de alimentação (vegano, vegetariano, carnívoro)
    * Preferências alimentares
    * Mudar Senha

* Deletar usuário (DELETE)
    * Pedir senha pra confirmar

## Cardápio
#### TABELA CARDÁPIO - OK OK
* Id
* Nome cardápio
* Status do cardápio
    * Cardápio possui todos os ingredientes
    * Cardápio possui receitas não cadastradas - não posso informar se temos todos os ingredientes
    * Cardápio não possui todos os ingredientes, atualizar lista de compras com ingredientes que faltam?
    * Cardápio não possui todos os ingredientes, e possui receitas não cadastradas
    * Todas as receitas não são cadastradas
* Custo médio do cardápio (AUTOMATICAMENTE)
* Layout Calendário
* Funcionalidades
    * Criar novo Cardápio (POST)
    * Conferir Cardápio (GET)
    * Conferir o que será feito em um dia específico (GET)
    * Deletar cardápio (DELETE)
        * deletar o cardápio da tabela CARDÁPIOS e as RECEITAS DO CARDÁPIO?

#### TABELA RECEITAS DO CARDÁPIO - OK OK
* Id da receita NESSA TABELA
* Nome da receita required varchar
* Quando será feita required timestamp
* Para quantas pessoas DEFAULT 1 Number
* Encontrar ID da receita na TABELA LIVRO DE RECEITAS
* Custo médio da receita - calculado automaticamente
* Status da receita - AUTOMÁTICO - receita não cadastrada, possui os ingredientes ou não possui os ingredientes
* Funcionalidades
    * Inserir prato no cardapio (POST)
    * Deletar prato do cardapio (DELETE)
    * modificar prato do cardapio (PUT)

## TABELA LISTA DE COMPRAS - OK OK
* id da lista primary key
* Nome da lista required number
* Status da lista - realizada, não-realizada ou programada para
* Custo médio da lista de compras - calculado automaticamente
* Funcionalidades
    * Criar lista nova (POST)
    * Deletar lista (DELETE)
    * Conferir lista (GET)
    * Conferir se tem item na lista (GET)
    * Modificar lista (PUT)
* Preencher lista (inserindo na tabela ITENS DE LISTA DE COMPRAS)
    * Inserir produto a ser comprado (POST)
    * Atualizar lista (PUT)
    * Deletar produto da lista (DELETE)
    
## TABELA ITENS DE LISTA DE COMPRAS - OK OK
* Nome do item required varchar
* lista_id required number (pra saber de que lista é)
* marca varchar
* quantidade number
* medida text (caixa, kg, potes, un)
* observação text
* preço medio number (calculado automaticamente baseado nos últimos três valores)

## TABELA LIVRO DE RECEITAS - OK OK
* Id primary key
* Nome do Prato varchar required
* Descrição do prato text
* Tabela nutricional text
* Lista de ingredientes - ligado a tabela INGREDIENTES DA RECEITA
* Custo do prato - calculado automaticamente
* Modo de preparo - text
* Avaliação
* Observação
* Funcionalidades
    * Inserir Prato (POST)
    * Conferir Prato (GET)
    * Conferir ingredientes do prato (GET)
    * deletar prato (DELETE)
    * modificar prato (PUT)
    * Conferir todo o livro de receitas

## TABELA INGREDIENTES DA RECEITA - OK OK
* Id primary key
* nome do ingrediente text not null
* quantidade integer
* unidade de medida dessa quantidade text (colher, ml, xícara)
* formato text (se em cubos, lascas, rodelas, raspas)
* receita_id integer foreign key references RECEITAS(id)
* despensa_id integer foreign key referecens PRODUTOS DA DESPENSA(id)

## TABELA PRODUTOS DA DESPENSA - OK OK
* Id
* nome do produto required varchar
* marca do produto varchar
* quantidade em cada unidade (ex. caixa de tantos ml)
* quantidade (unidades) number
* data de validade
* local (despensa, geladeira, congelador, armário)
* status (aberto, fechado, vencido)
* quanto custou na última compra number
* Funcionalidades
    * Inserir produto na despensa (POST)
    * Atualizar produto na despensa (PUT)
    * Apagar item da despensa (DELETE)
    * Ver itens na despensa (GET)
    * Buscar produto na despensa (GET)