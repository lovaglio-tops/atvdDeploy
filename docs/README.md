# EcommerceTech - Back-end API

## Descrição do projeto

O **EcommerceTech Back-end** é uma API REST desenvolvida em **Node.js** com **Express**, responsável por gerenciar os dados da aplicação de e-commerce.

A API fornece endpoints para:

* gerenciamento de produtos,
* gerenciamento de categorias,
* gerenciamento de pedidos,
* upload de imagens,
* integração com banco de dados MySQL.

O sistema foi desenvolvido para ser consumido pelo front-end SPA do projeto EcommerceTech.

---

# Funcionalidades

## Produtos

* Cadastro de produtos
* Atualização de produtos
* Remoção de produtos
* Listagem de produtos
* Busca de produto por ID
* Upload de imagem do produto

## Categorias

* Cadastro de categorias
* Atualização de categorias
* Exclusão de categorias
* Listagem de categorias
* Busca de categoria por ID

## Pedidos

* Criação de pedidos
* Atualização do status do pedido
* Remoção de pedidos
* Listagem de pedidos
* Busca de pedido por ID

## Recursos gerais

* API RESTful
* Integração com MySQL
* Upload de arquivos com Multer
* Tratamento de erros
* Uso de variáveis de ambiente
* Arquitetura organizada em camadas

---

# Tecnologias utilizadas

* Node.js
* Express.js
* MySQL
* mysql2
* Multer
* Cors
* Dotenv
* UUID
* JavaScript ES6+

---

# Estrutura do projeto

```plaintext
back-end/
│
├── docs/                          # Documentação do projeto
│
├── src/
│   │
│   ├── configs/                   # Configurações gerais
│   │   ├── Database.js
│   │   └── upload.multer.js
│   │
│   ├── controllers/               # Regras de entrada da aplicação
│   │   ├── categoriaController.js
│   │   ├── pedidoController.js
│   │   └── produtoController.js
│   │
│   ├── enums/                     # Enumerações do sistema
│   │   └── statusPedido.js
│   │
│   ├── middlewares/               # Middlewares da aplicação
│   │   └── uploadImage.middleware.js
│   │
│   ├── models/                    # Modelos de dados
│   │   ├── Categoria.js
│   │   ├── Pedido.js
│   │   ├── Produto.js
│   │   └── ItensPedido.js
│   │
│   ├── repositories/              # Acesso ao banco de dados
│   │   ├── categoriaRepository.js
│   │   ├── pedidoRepositories.js
│   │   └── produtoRepositories.js
│   │
│   ├── routes/                    # Rotas da API
│   │   ├── categoriaRoutes.js
│   │   ├── pedidosRoutes.js
│   │   ├── produtoRoutes.js
│   │   └── routes.js
│   │
│   ├── server.js                  # Inicialização do servidor
│   │
│   └── uploads/                   # Imagens enviadas
│
├── .env                           # Variáveis de ambiente
├── package.json
└── package-lock.json
```

---

# Arquitetura utilizada

O projeto segue uma arquitetura organizada em camadas:

## Controllers

Responsáveis por:

* receber requisições HTTP,
* validar dados,
* chamar os repositórios,
* retornar respostas.

## Repositories

Responsáveis pela comunicação direta com o banco de dados MySQL.

## Models

Responsáveis pela estrutura e organização dos dados da aplicação.

## Routes

Responsáveis por mapear os endpoints da API.

## Middlewares

Responsáveis por interceptar requisições e executar funções auxiliares, como upload de imagens.

---

# Configuração do ambiente

## 1. Clonar o projeto

```bash
git clone <url-do-repositorio>
```

---

## 2. Instalar as dependências

```bash
npm install
```

---

## 3. Configurar o arquivo .env

Exemplo:

```env
SERVER_PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=ecommercetech
DB_PORT=3306
```

---

## 4. Executar o projeto

```bash
node src/server.js
```

Ou utilizando nodemon:

```bash
npx nodemon src/server.js
```

---

# Rotas da API

## Produtos

### Listar produtos

```http
GET /produtos
```

---

### Buscar produto por ID

```http
GET /produtos/:id
```

---

### Criar produto

```http
POST /produtos
```

### Body

```json
{
  "nome": "Notebook Gamer",
  "descricao": "Notebook RTX",
  "preco": 4500,
  "estoque": 10,
  "categoriaId": 1
}
```

---

### Atualizar produto

```http
PUT /produtos/:id
```

---

### Remover produto

```http
DELETE /produtos/:id
```

---

# Categorias

### Listar categorias

```http
GET /categoria
```

---

### Buscar categoria por ID

```http
GET /categoria/:id
```

---

### Criar categoria

```http
POST /categoria
```

### Body

```json
{
  "nome": "Informática"
}
```

---

### Atualizar categoria

```http
PUT /categoria/:id
```

---

### Remover categoria

```http
DELETE /categoria/:id
```

---

# Pedidos

### Listar pedidos

```http
GET /pedidos
```

---

### Buscar pedido por ID

```http
GET /pedidos/:id
```

---

### Criar pedido

```http
POST /pedidos
```

### Body

```json
{
  "itens": [
    {
      "produtoId": 1,
      "quantidade": 2
    },
    {
      "produtoId": 3,
      "quantidade": 1
    }
  ]
}
```

---

### Atualizar status do pedido

```http
PUT /pedidos/:id
```

### Body

```json
{
  "statusPedido": "FINALIZADO"
}
```

---

### Remover pedido

```http
DELETE /pedidos/:id
```

---

# Upload de imagens

A API utiliza o **Multer** para upload de imagens dos produtos.

As imagens são armazenadas na pasta:

```plaintext
/uploads/imagens
```

E disponibilizadas publicamente pela rota:

```http
/uploads/nome-da-imagem.png
```

---

# Banco de dados

O sistema utiliza MySQL como banco de dados principal.

## Principais tabelas

* produtos
* categorias
* pedidos
* itens_pedidos

---

# Status de pedidos

Os pedidos utilizam enumeração de status.

Exemplo:

```js
ABERTO
FINALIZADO
CANCELADO
```

---

# Exemplo de resposta da API

```json
{
  "message": "Produto cadastrado com sucesso"
}
```

---

# Tratamento de erros

A API retorna respostas padronizadas para erros.

Exemplo:

```json
{
  "error": "Mensagem de erro"
}
```

---

# Integração com Front-end

O back-end foi desenvolvido para integração direta com o front-end SPA do EcommerceTech.

A comunicação é realizada via:

* Fetch API
* Axios
* JSON
* Requisições HTTP REST

---

# Melhorias futuras

* Autenticação JWT
* Cadastro de usuários
* Painel administrativo
* Paginação de produtos
* Filtros de busca
* Upload múltiplo de imagens
* Integração com pagamentos
* Validação avançada de dados

---

# Autor

Projeto desenvolvido para fins educacionais e prática de desenvolvimento Full Stack.
