import { Router } from 'express';
import { imagemController } from '../controllers/imagemController';
const multer = require('multer');

import * as imgConfg from '../helper'
var imgStorage = imgConfg.storage;
var imgFilter = imgConfg.imgFilter; 

class ImagemRoutes {
    public router: Router = Router();
    private upload: any;

    constructor(){
        this.upload = this.startImgUpload();
        this.config();
    }

    config(): void {
        this.router.get('/carrosselMain', imagemController.fotosCarrosselMain);
        this.router.get('/', imagemController.listaAll);
        this.router.get('/ftvinicola/:id', imagemController.ftosVinicolaByID);
        // this.router.post('/addImagem/', imagemController.create);
        this.router.delete('/:id', imagemController.delete);
        this.router.post('/upload/', this.upload.single('avatar'), imagemController.uploadImg);
    }



    startImgUpload(): any{
        // Setting up upload sys.
        const uploads = multer({
            storage: imgStorage,
            fileFilter: imgFilter 
        });
        return uploads;
    }

}

const imagemRoutes = new ImagemRoutes();
export default imagemRoutes.router
