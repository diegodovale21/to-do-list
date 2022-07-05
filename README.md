# To-do-list
Desenvolvido uma API com Node.js para salvar dados no MongoDB e retornar os dados em json, através de uma requisição. 
Para o front-end o React.js faz a requisão ao banco e rendenriza uma aplicação.

## Client

### Projeto inicializado com o Create-React-App
Para rodar o projeto localmente será necessário a instalação do node modules.

na raiz da pasta client execute no teminal:

> npm install - instalando o node modules.

obs: npm install deve ser executado apenas no inicio.

 > npm run dev - Executa o aplicativo no modo de desenvolvimento.
 
![image](https://user-images.githubusercontent.com/93170497/176515901-07d5e4be-a062-4e01-abc3-da08137def4a.png)

 ## Server
 
Server desenvolvido com Node.js, criação de Api, rotas CRUD, com cominicação com banco de dados MongoDB, para salvar as tarefas adicionadas.
na raiz da pasta server execute no teminal:

> npm install - instalando o node modules.

obs: npm install deve ser executado apenas no inicio.

 > nodemon dev - Para rodar o servidor.

## API
Esta Api retorna os dados em Json pela rota http://localhost:8080/api/tasks

exemplo de retorno:
```
[
    {
        "_id": 15,
        "task": "Comprar leite",
        "completed": true
    },
    {
        "_id": 16,
        "task": "Levar o cachorro para passear",
        "completed": true
    },
    {
        "_id": 17,
        "task": "Ir ao mercado comprar cerveja",
        "completed": false
    },
    {
        "_id": 18,
        "task": "Lavar o carro",
        "completed": false
    }
]
```
## Desenvolvimento, dependências usadas

### Client
* React.js
* Axios
* Material-ui/core
### Server
* Node.js
* Express
* Nodemon
* Cors
* Mongoose
* Mongoose-auto-increment





