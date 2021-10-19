import { Router } from 'express';
import { imagemController } from '../controllers/imagemController';
const multer = require('multer');
import * as imgConfg from '../middlewares/helper'

class ImagemRoutes {
    public router: Router = Router();
    private imgStorage = imgConfg.storage;
    private imgFilter = imgConfg.imgFilter; 
    private upload = multer({
            storage: this.imgStorage,
            fileFilter: this.imgFilter
        });

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/carrosselMain', imagemController.fotosCarrosselMain);
        this.router.get('/ftvinicola/:id', imagemController.ftosVinicolaByID);
        this.router.get('/:id', imagemController.ftosVinicolaByID);
        // this.router.post('/addImagem/', imagemController.create);
        this.router.delete('/:id', imagemController.delete);
        this.router.post('/upload/',this.upload.single('file'), imagemController.uploadImg);
    }


}

const imagemRoutes = new ImagemRoutes();
export default imagemRoutes.router
