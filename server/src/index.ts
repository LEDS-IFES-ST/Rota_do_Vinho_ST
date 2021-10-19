import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

import indexRoutes from './routes/indexRoutes';
import empresaRoutes from './routes/empresaRoutes'
import vinicolasRoutes from './routes/vinicolasRoutes';
import enderecoRoutes from './routes/enderecoRoute';
import informacaoRoutes from './routes/informacaoRoute';
import contatoRoutes from './routes/contatoRoute';
import imagemRoutes from './routes/imagemRoute';
import pessoaRoutes from './routes/pessoaRoute';

import dbConfig from "./key";

import { knexdb } from "./knexfile"
import Knex from 'knex';

class Server { 
    public app: Application;
    private db = Knex(knexdb.development)

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.setupKnex();
    }

    private async setupKnex(): Promise<void> {
        try {
            const res = await this.db.raw("select 1+1 as primeiro_contato");
            console.log("[KNEX]: Conectado do Banco de dados" + knexdb.development.connection.host + ":" +
                knexdb.development.connection.port + "@" +
                knexdb.development.connection.user + " - DB: " +
                knexdb.development.connection.database
            );
        } catch (error) {
            throw new Error("[KNEX]: Falha ao conectar banco de dados \n " + knexdb.development.connection.host + ":");

        }
    }

    routes(): void {
        var folderPath = path.join(__dirname + '/../uploads/')
        this.app.use('/imgs', express.static(folderPath)); // http://localhost:3000/imgs/nomeImagem.jpg
        this.app.use('/', indexRoutes);
        this.app.use('/api/vinicolaControl', vinicolasRoutes);
        this.app.use('/api/empresaControl', empresaRoutes);
        this.app.use('/api/enderecoControl', enderecoRoutes);
        this.app.use('/api/infoControl', informacaoRoutes);
        this.app.use('/api/imagemControl', imagemRoutes);
        this.app.use('/api/contatoControl', contatoRoutes);
        this.app.use('/api/pessoaControl', pessoaRoutes);

    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log(`
            ██╗     ███████╗██████╗ ███████╗                  
            ██║     ██╔════╝██╔══██╗██╔════╝                  
            ██║     █████╗  ██║  ██║███████╗                  
            ██║     ██╔══╝  ██║  ██║╚════██║                  
            ███████╗███████╗██████╔╝███████║                  
            ╚══════╝╚══════╝╚═════╝ ╚══════╝                  
                                                  
    ██╗███████╗███████╗███████╗      ███████╗████████╗
    ██║██╔════╝██╔════╝██╔════╝      ██╔════╝╚══██╔══╝
    ██║█████╗  █████╗  ███████╗█████╗███████╗   ██║   
    ██║██╔══╝  ██╔══╝  ╚════██║╚════╝╚════██║   ██║   
    ██║██║     ███████╗███████║      ███████║   ██║   
                           `);
            console.log('Servidor conectado na porta', this.app.get('port'))
        });

    }


}


const server = new Server();
server.start();

