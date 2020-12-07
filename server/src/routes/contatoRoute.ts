import { Router } from 'express';
import { contatoController } from '../controllers/contatoController';
class ContatoRoutes {
    public router: Router = Router();
    static router: any;

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', contatoController.listaAll);
        this.router.post('/addContato/', contatoController.create);
        this.router.get('/:id', contatoController.getContatoByID);
        this.router.delete('/:id', contatoController.delete);
    }

    


}

const contatoRoutes = new ContatoRoutes();
export default contatoRoutes.router;
