import logo from './logo.svg';
import './App.css';

function App() {
    return (
            <div className="App">
            <header className="App-header">
            <h2>
            Test upload de arqv 
            </h2>
            <form action="http://localhost:3000/api/imagemControl/upload/" method="post" enctype="multipart/form-data">
            <br />
            <input type="file" id="avatar" name="avatar" />
            <button type="submit"> Enviar</button>
            </form>

            </header>
            </div>
           );
}

export default App;
