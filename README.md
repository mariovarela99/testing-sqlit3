# Testing-sqlit3

## Projecto de Aprendizado e Teste das bibliotecas FileSystem e Sqlite3 do NodeJS

### Dependências

```json
 "dependencies": {
    "fs": "^0.0.1-security",
    "sqlite3": "^5.0.2"
  }
```

### DataBase

- [Sqlite](https://www.sqlite.org/index.html)

### Stacks

- Javascript
- NodeJS

### Funções utilizadas

#### FS

```js
const fs = require("fs");
fs.existsSync();
fs.writeFile();
```

#### SQlite3

```js
var sqlite3 = require("sqlite3").verbose();
sqlite3.Database();
Database().serialize();
Database().run();
Database().prepare();
Database().finalize();
Database().each();
Database().get();
Database.close();
```

## Author

```json
"author": {
    "name": "Mário Varela",
    "email": "marioteixeiravarela@gmail.com",
    "github": "https://github.com/mariovarela99",
    "phone": "00244940245416"
  },
```

## Clonar e Executar

```bash
# Clone o Repo
git clone https://github.com/mariovarela99/testing-sqlit3.git
# Instale as dependencias
yarn || npm install
# Execute o Projecto
yarn start
```
