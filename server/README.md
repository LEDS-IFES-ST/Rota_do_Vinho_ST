# Rota_do_Vinho_ST
Novo repositório do sistema da Rota do Vinho da Avist

## Dependencias
* NPM ou YARN 
* Docker version 20.10.7, build 20.10.7
* Docker-compose (https://docs.docker.com/desktop/windows/install/)


## Ambiente  
```bash    
$ git clone >repositorio< 
```
```bash
$ cd Rota-Do-Vinho/server/
[darkzera ~/projetos/Rota_do_Vinho/server/]$ docker-compose up -d 
[darkzera ~/projetos/Rota_do_Vinho/server/]$ docker logs rota_vinicolas
```

### Flow basico do container:

```bash
[darkzera ~/projetos/Rota_do_Vinho/server/]$ docker-compose up -d -> inicializa o container já com algumas confs.
[darkzera ~/projetos/Rota_do_Vinho/server/]$ docker container list --all
[darkzera ~/projetos/Rota_do_Vinho/server/]$ docker stop rota_vinicolas -> FINALIZA o container
[darkzera ~/projetos/Rota_do_Vinho/server/]$ docker rm rota_vinicolas -> REMOVE o container
```

Caso queira remover e limpar o container pra subir ele do zero novamente:
```bash
[darkzera ~/projetos/Rota_do_Vinho/server/]$ docker-compose down -v
[darkzera ~/projetos/Rota_do_Vinho/server/]$ docker-compose up -d 
```
<b>DEPENDENDO DAS CONFIGURACOES DO SIS.OPERACIONAL o Docker pode requisitar autoridade de super usuário. Nesse caso, utilizar sudo ... antes de todos os comandos acima</b>

- http://docs.docker.com/

  

# Documentacao API

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