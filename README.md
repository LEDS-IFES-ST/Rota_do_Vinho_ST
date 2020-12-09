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

## Chamadas basicas
### vinicolaControl
#### http://localhost:3000/api/vinicolaControl/list/ - GET
Lista todas as vinicolas cadastradas
```javascript
 [{
    "codEmpresa": 3,
    "TipoEmpresa_codTipoEmpresa": 2,
    "nomeEmpresa": "Cantina Mattiello",
    "infos": "Comune di Soave",
    "biografia": null,
    "email": "matiello@matiello.org",
    "linkGoogleMaps": "http://linkMatiello.googleMaps",
    "latitude": 123,
    "longitude": 456
  },
  {
    "codEmpresa": 4,
    "TipoEmpresa_codTipoEmpresa": 2,
    "nomeEmpresa": "Casa dos Espumantes",
    "infos": "Casa com espumas",
    "biografia": null,
    "email": "casa@espumantes.net",
    "linkGoogleMaps": "http://espumantes.googleMaps",
    "latitude": 1111,
    "longitude": 11111100
  }]
```


### imagemControl
#### http://localhost:3000/api/imagemControl/carrosselMain/ - GET
Busca de fotos para montagem do carrossel da pag. Uma foto de cada vinicola 
```javascript
[
  {
    "pathImagem": "http://i0.wp.com/www.cantinamattiello.com.br/wp-content/uploads/2016/09/fundocantina.png",
    "Empresa_codEmpresa": 3
  },
  {
    "pathImagem": "https://i0.wp.com/www.casadosespumantes.com.br/wp-content/uploads/2017/06/1.png?w=954",
    "Empresa_codEmpresa": 4
  }
]
```


#### http://localhost:3000/api/imagemControl/ftVinicola/{ID} - GET
Retorna fotos da vinicola by ID
```javascript
{
  "list": [
    {
      "Empresa_codEmpresa": 4,
      "pathImagem": "https://i2.wp.com/www.casadosespumantes.com.br/wp-content/uploads/2017/08/casa-dos-espumantes-garrafas-wide.jpg?fit=1892%2C510"
    },
    {
      "Empresa_codEmpresa": 4,
      "pathImagem": "https://i0.wp.com/www.casadosespumantes.com.br/wp-content/uploads/2017/06/1.png?w=954"
    }
  ]
}

```

### facilitador supremo
#### http://localhost:3000/api/vinicolaControl/infoGeral/{ID} - GET
Nessa chamada aqui retornar TODAS as informacoes necessarias pra montar a pag. de cada vinicola
* 0 -- Informacoes basicas da emp.
* 1 -- Endereco
* 2 -- Fotos 
* 3 -- Contato 
* 4 -- Informações ***TODO// 

```javascript
[
  {
    "codEmpresa": 4,
    "TipoEmpresa_codTipoEmpresa": 2,
    "nomeEmpresa": "Casa dos Espumantes",
    "infos": "Casa com espumas",
    "biografia": null,
    "email": "casa@espumantes.net",
    "linkGoogleMaps": "http://espumantes.googleMaps",
    "latitude": 1111,
    "longitude": 11111100
  },
  [
    {
      "codEndereco": 3,
      "Empresa_codEmpresa": 4,
      "rua": "opa",
      "cidade": "BH",
      "bairro": "Centro",
      "numero": null,
      "referencia": null,
      "logradouro": null
    }
  ],
  [
    {
      "codImagem": 2,
      "Empresa_codEmpresa": 4,
      "TipoImagem_codTipoImagem": 3,
      "pathImagem": "https://i2.wp.com/www.casadosespumantes.com.br/wp-content/uploads/2017/08/casa-dos-espumantes-garrafas-wide.jpg?fit=1892%2C510",
      "descImagem": "espuma",
      "ordemApresentacao": "1"
    },
    {
      "codImagem": 3,
      "Empresa_codEmpresa": 4,
      "TipoImagem_codTipoImagem": 2,
      "pathImagem": "https://i0.wp.com/www.casadosespumantes.com.br/wp-content/uploads/2017/06/1.png?w=954",
      "descImagem": "espuma2",
      "ordemApresentacao": "2"
    }
  ],
  [
    {
      "codContato": 3,
      "Empresa_codEmpresa": 4,
      "TipoContato_TipoContato": 2,
      "descContato": "(27)9999-8888"
    }
  ],
  [],
  []
]

```

### FRONT-END WEB

##### Iniciando

*~necessario estar na pasta WEB;
	
*~caso tenha apenas instalado o NPM, favor instalar o YARN em https://classic.yarnpkg.com/pt-BR/docs/install

* Primeiro passo é instalar o CLI (Command Line Interface) do ReactJS
	
	*yarn install -g create-react-app
	
* Segundo passo ser instalar as dependencias da aplicação web. 
	
	*yarn install 

	###### Depedencias utilizadas. 	
	*Axios: Cliente HTTP usado para enviar requisições à API;
	*PropTypes: Lib para chegagem de tipo das props de componentes React;
	*ReactRouter:Lib implementação de navegação na aplicação;
	*StyledComponents: Lib usada estilização dos componentes.
	*Font Awesome: Lib de fontes de ícones.


##### Estrutura
	
		*src/
		 *|--- assets/   # Aqui ficará as imagens
		 *|--- configs/  # Variáveis de configurações
		 *|--- pages/    # As nossas páginas 
		 *|--- index.css/   # Estilos globais
		 *|--- App.js    # Arquivo que conterá configurações principais do App
		 *|--- routes.js # Arquivo contendo as principais rotas do App
		 
##### Comandos
	
	###### yarn Start
			
			*Inicia o servidor de desenvolvimento.

	######	yarn build
    Empacota o aplicativo em arquivos estáticos para produção.


	######  yarn eject ** NÃO UTILIZAR ** 
    Remove esta ferramenta e copia dependências de construção, arquivos de configuração
    e scripts no diretório do aplicativo. Se você fizer isso, você não pode voltar!
	
	
	
### FRONT-END MOBILE

	* Apenas pasta para implementações futuras.
	
		*Construindo App com Mapa usando React Native Maps e MapBox
			* https://blog.rocketseat.com.br/construindo-um-app-com-mapas-usando-react-native-maps-e-mapbox/