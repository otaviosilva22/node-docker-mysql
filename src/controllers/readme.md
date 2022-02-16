<div id='top-document'/>


# Documentação de APIs
* [1. create](#1)
* [2. update](#2)
* [3. read](#3)
* [4. delete](#4)

<div id='1' />


## 1. create
**Endpoint:** `localhost:3000/create`

**Método:** POST

**Body Params Type:** raw

<details>
<summary>Exemplo de body</summary>


``` json
 {
  "name": "Teste",
  "email": "teste@mail.com"
}
```
</details>




[> Voltar ao Topo <](#top-document)
</br></br>

<div id='2' />


## 2. update
**Endpoint:** `localhost:3000/update`

**Método:** POST

**Body Params Type:** raw

<details>
<summary>Exemplo de body</summary>


``` json
 {
  "name": "Teste atualizado 2",
  "email": "teste@mail.com"
}
```
</details>

[> Voltar ao Topo <](#top-document)

</br>
<div id='3' />


## 3. read
**Endpoint:** `localhost:3000/read`

**Método:** GET

### Query Params
Param|Obrigatório|Descrição
---|---|---
email|Sim|

[> Voltar ao Topo <](#top-document)

<br>


<div id='4' />


## 4. delete
**Endpoint:** `localhost:3000/delete`

**Método:** POST

**Body Params Type:** raw

<details>
<summary>Exemplo de body</summary>


``` json
 {
  "email": "teste@mail.com"
}
```
</details>

[> Voltar ao Topo <](#top-document)

<br><br>

