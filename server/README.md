# Rota_do_Vinho_ST
Novo repositório do sistema da Rota do Vinho da Avist
# Instalacao

* NPM / YARN 
* Mysql

 Ambiente  
```bash    
$ git clone > repositorio < 
$ cd Rota-Do-Vinho/server/
$ npm i 
```
 * Banco de dados
   * Rodar o script SQL (./database/SCRIPT.sql) na base de dados
   * Configuraçao de conxao do BD (Esse arquivo é ignorado pelo gitIgnore) Crie o arquivo manualmente seguindo o padrao abaixo

<i>./server/keys.ts</i>
```javascript
export default {
    database: {
        host: 'localhost',
        user: '',           //usuario mysql
        password: '',       //password mysql
        database: 'avistdb'
    }
}
```

```bash
$ cd Rota-Do-Vinho/server/
$ npm run build & npm run dev
```
  

# Utilizacao 

## Prefixo da API
* http://localhost:3000/api/

https://documenter.getpostman.com/view/7407839/TVmS9G8u

___
## Upload de arquivos 

* Limitado apenas p/ imagens nos formatos: .jpg/jpeg e .png

<i>./middlewares/helper.ts</i>
```javascript
...
    if (formatFile == 'jpeg' || formatFile == 'jpg' || formatFile == 'png') {
        cb(null, true);
    } else {
        cb(null, false)
    }
...
```

* Nao aceita upload de arquivos simultaneos.