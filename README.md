# Desafio Cielo

   Este é um projeto do desafio tecnico na seleção de colaboradores da Cielo realizado pela Ada.
   Sendo esse projeto passado na segunda semana do total de duas e tem o objetivo de avaliar candidato a vaga de frondend.


## Funcionalidade

  O projeto solicita uma aplicação composta de uma tela onde o usuário consegue listar as transações realizada em determinado período em forma de tabela onde cada linha pode dar acesso ao modal de detalhamento desta transação
  Neste modal, além das informações, separa em celular também é possível voltar a tela inicial por um icon button localizado na parte superior esquerda do modal
  Essa aplicação é alimentada por uma api - fake no próprio repositório

## Tecnologia Usadas
  - nodejs@18
  - reactjs
  - styled-components
  - redux e redux-saga
  - contextApi
  - axios
  - react-icons
  - jest
  - React Testing Library (RTL)
  - yarn

### Arquitetura da aplicação
  Esta aplicação foi desenvolvida usando a arquitetura limpa mvvm + hexagonal

### Organização de pastas
```shell
  $ tree
   src
   ├───adapters      
   │   ├───input     
   │   └───output    
   ├───core          
   │   ├───domain    
   │   └───use_case  
   ├───external      
   ├───ports         
   │   ├───input     
   │   └───output    
   ├───shared        
   ├───store         
   │   ├───actions   
   │   ├───reduces   
   │   ├───sagas     
   │   └───types     
   ├───styles        
   └───view          
      ├───providers
      ├───components
      └───pages     
         └───App
   main.ts
```
## Inicialização
``` shell
   #necessário uso do nodejs versão 18.x
   git https://github.com/cledson-leite/desafio-cielo.git
   cd desafio-cielo
   yarn || npm install
   # abre um terminal
   yarn backend
   # em outro terminal ou aba
   yarn dev || npm run dev
```
## Teste
``` shell
   git https://github.com/cledson-leite/desafio-cielo.git
   cd desafio-cielo
   yarn || npm install
   yarn test || npm test
```

### Projeto desenvolvido por [Cledson Leite](https://www.linkedin.com/in/cledson-leite/)

