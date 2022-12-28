# Bloco de Notas

API de um Bloco de Notas simples feita em [Node.Js](https://nodejs.org/en/) com o framework [Express](https://expressjs.com/pt-br/). O banco de dados escolhido foi o [MongoDB](https://www.mongodb.com/home), e os dados estão sendo persistidos pela biblioteca [Mongoose](https://mongoosejs.com/).

Nesse projeto foi usado o gerenciador de pacotes [Npm](https://www.npmjs.com/) para baixar e configurar as dependencias do projeto.

Será necessario criar um arquivo '.env' para configurar o Usuario e Senha do banco de dados. O arquivo '.example.env' deve ser usado como modelo.

## Preparando o ambiente

- Baixe o [NodeJs](https://nodejs.org/en/download/)
- Instale o [Postman](https://www.postman.com/downloads/)
- Abra uma conta no [MongoDB Atlas](https://account.mongodb.com/account/register)

## Atualizando as dependências

- Abra o terminal na pasta da aplicação,
- Digite <i>npm install</i> para baixar as dependências.

## Iniciando a aplicação

- Abra o terminal na pasta da aplicação,
- Digite: <i>npm start</i> para inicializar o servidor,
- Abra o Postman,
- Use a URI: http://localhost:3000

<br>

# Endpoints

## POST - /notes

<br>

Corpo da Requisição:

```
{
  "title": "Titulo da nota",
  "note": "Corpo da nota"
}
```

Exemplo de Resposta:

```
{
  "message": "Nota cadastrada com sucesso."
}
```

<br>

## GET - /notes - /notes/:id - /notes/title/:titulo

<br>

Exemplo de Resposta:

```
{
  "_id": "234234564677664534",
  "title": "Titulo da nota",
  "note": "Corpo da nota",
 "__v": 0
}
```

<br>

## PUT - /notes/:id

<br>

Corpo da Requisição:

```
{
  "title": "Titulo da nota",
  "note": "Corpo da nota"
}
```

Exemplo de Resposta:

```
{
  "message": "Nota atualizada com sucesso."
}
```

<br>

## DELETE - /notes/:id

<br>

Exemplo de Resposta:

```
{
  "message": "Nota deletada com sucesso."
}
```
