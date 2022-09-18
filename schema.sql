create database hausmenu

create table usuarios (
  id serial primary key,
  nome text,
  email text unique not null,
  senha text not null,
  genero text,
  dieta text,
  imagem text
  )

create table cardapio (
  id serial primary key,
  nome text unique not null,
  status text,
  inicio timestamptz,
  fim timestamptz,
  duracao integer,
  custo_medio integer
)

create table livro_de_receitas (
  id serial primary key,
  nome text not null,
  descricao text,
  dieta text,
  custo_medio integer,
  modo_de_preparo text,
  avaliacao integer,
  observacao text,
  imagem text
)

create table receitas_do_cardapio (
  id serial primary key,
  nome text not null,
  data_de_preparo timestamptz,
  qtdade_de_pessoas integer DEFAULT 1,
  status boolean,
  cardapio_id integer,
  receita_id integer,
  imagem text,
  foreign key(cardapio_id) references cardapio(id),
  foreign key(receita_id) references livro_de_receitas(id)
)

create table lista_de_compras (
  id serial primary key,
  nome text not null,
  status text DEFAULT 'a fazer',
  custo_aproximado integer
)

create table itens_da_lista (
  id serial primary key,
  nome text not null,
  lista_id integer,
  marca varchar,
  quantidade integer,
  medida text DEFAULT 'un',
  observacao text,
  foreign key(lista_id) references lista_de_compras(id)
)


create table despensa (
  id serial primary key,
  nome text not null,
  marca text,
  quantidade text default 'un',
  qtdade_por_un text,
  validade timestamptz,
  armazenamento text default 'despensa',
  status text,
  custo integer
)

create table ingredientes_da_receita (
  id serial primary key,
  ingrediente text not null unique,
  quantidade integer,
  medida text,
  formato text,
  receita_id integer,
  despensa_id integer,
  foreign key(receita_id) references livro_de_receitas(id),
  foreign key(despensa_id) references despensa(id)
)

create table secoes(
  id serial primary key,
  nome text not null
  )
  
insert into secoes(nome) values ('bebidas');
insert into secoes(nome) values ('cereais e farináceos');
insert into secoes(nome) values ('enlatados');
insert into secoes(nome) values ('frios');
insert into secoes(nome) values ('laticínios');
insert into secoes(nome) values ('material de limpeza');
insert into secoes(nome) values ('higiene pessoal');
insert into secoes(nome) values ('peixaria');
insert into secoes(nome) values ('portifruti');
insert into secoes(nome) values ('padaria');
insert into secoes(nome) values ('mercearia');
insert into secoes(nome) values ('outros');



create table produtos(
  id serial primary key,
  nome text not null,
  categoria text not null,
  descricao text,
  secao_id integer,
  foreign key(secao_id) references secoes(id)
)
