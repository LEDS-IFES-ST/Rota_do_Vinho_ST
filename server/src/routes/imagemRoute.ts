import { Router } from 'express';
import { imagemController } from '../controllers/imagemController';
const multer = require('multer');
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
        this.router.post('/upload', this.upload.single('avatar'), imagemController.uploadImg);
    }



    startImgUpload(): any{
        // Configuracao pro Multer -> Upload de arquivos
        const storage = multer.diskStorage({
            filename: function (req: Express.Request,
                file: Express.Multer.File,
                cb: (error: Error | null, filename: string) => void) {
                cb(null, file.originalname + '-' + Date.now());
            },
            destination: function (req: Express.Request,
                file: Express.Multer.File,
                cb: (error: Error | null, path: string) => void) {
                cb(null, __dirname + '/../../uploads/');
                console.log(__dirname + '/../../uploads/');
            }
        });
        var imgFilter = function (req: Express.Request,
            file: Express.Multer.File,
            cb: (error: Error | null, filename: boolean) => void) {
            var formatFile = file.mimetype.split('/')[1];
            try {
                if (formatFile == 'jpeg' || formatFile == 'jpg' || formatFile == 'png') {
                    cb(null, true);
                } else {
                    cb(null, false);
                }
            } catch (error) {
                console.log("-----", error)
            }
        }

        const uploads = multer({
            storage: storage,
            fileFilter: imgFilter
        });
        return uploads;
    }

}

const imagemRoutes = new ImagemRoutes();
export default imagemRoutes.router
