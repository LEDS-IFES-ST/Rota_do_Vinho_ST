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



############ A partir daqui é o README original
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
