import { Router } from 'express';
import { vinicolaController } from '../controllers/vinicolaController';
class VinicolasRoutes {
    // teclado 35x14
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/lista', vinicolaController.listaVinicolas);
        this.router.get('/informacoesGerais/:id', vinicolaController.informacoesEmpresaById);
    }

}

const vinicolaRoutes = new VinicolasRoutes();
export default vinicolaRoutes.router;