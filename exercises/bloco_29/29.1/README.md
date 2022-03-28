# Resolução de Exercício do Bloco 29.1

## Introdução ao MongoDB

## Utilizando a coleção [bios](https://www.mongodb.com/docs/manual/reference/bios-example-collection/) disponível na documentação do MongoDB, construa as queries para retornar os seguintes itens:

### Requisitos:

### **Exercício 1:**
  - Retorne o documento com o `_id` igual a `8`.

### **Exercício 2:**
  - Retorne o documento com o `_id` igual a `8`, mas só exiba os atributos: **_id** e **name**

### **Exercício 3:**
  -Retorne apenas os atributos name e birth do documento com o _id igual a 8.

### **Exercício 4:**
  - Retorne todos os documentos em que o atributo name.first seja igual a **John**, utilizando o método `pretty()`.

**Exercício 5:**
  - Retorne os 3 primeiros documentos da coleção bios utilizando o método `pretty()`.

**Exercício 6:**
  - Retorne 2 documentos da coleção bios pulando os 5 primeiros documentos.

  ### Utilizando o [mongoimport](https://www.mongodb.com/docs/database-tools/mongoimport/#examples) , importe o arquivo [books.json](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/books-48d15e4d8924badc2308cc4a62eb3ea4.json) para a sua instância local do MongoDB e utilize a coleção **books** para construir as seguintes consultas:

**Exercício 7:**
  - Retorne a quantidade de documentos da coleção **books**.

**Exercício 8:**
  - Conte quantos livros existem com o **status = "PUBLISH"**.

**Exercício 9:**
  - Exiba os atributos **title** , **isbn** e **pageCount** dos 3 primeiros livros. **NÃO** retorne o atributo _id .

**Exercício 10:**

Pule 5 documentos e exiba os atributos **_id** , **title** , **authors** e **status** dos livros com o **status = "MEAP"** , limitando-se a 10 documentos.