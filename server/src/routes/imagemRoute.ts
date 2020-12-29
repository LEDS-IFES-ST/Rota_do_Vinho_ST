import { Router } from 'express';
import { imagemController } from '../controllers/imagemController';
const multer = require('multer');
import * as imgConfg from '../middlewares/helper'

class ImagemRoutes {
    public router: Router = Router();
    private upload: any;
    private imgStorage = imgConfg.storage;
    private imgFilter = imgConfg.imgFilter; 

    constructor(){
        this.config();
        this.setupMulter();
    }

    config(): void {
        this.router.get('/carrosselMain', imagemController.fotosCarrosselMain);
        this.router.get('/', imagemController.listaAll);
        this.router.get('/ftvinicola/:id', imagemController.ftosVinicolaByID);
        // this.router.post('/addImagem/', imagemController.create);
        this.router.delete('/:id', imagemController.delete);
        this.router.post('/upload/', this.upload.single('avatar'), imagemController.uploadImg);
    }

    private setupMulter():void {
        this.upload = multer({
            storage: this.imgStorage,
            fileFilter: this.imgFilter 
        });

    }

}

const imagemRoutes = new ImagemRoutes();
export default imagemRoutes.router
