import { Request, Response } from 'express';
import { pool } from '../database';
import { imagemModel } from "../models/imagemModel";
import { util } from "../util";
import env from '../helpers/env';
import { imgFilter } from '../middlewares/helper';


class ImagemController {

    public async listaAll(req: Request, res: Response) {
        var list: any;
        list = await imagemModel.getAllImg();
        res.json(list);
    }


    public async getImagemByID(req: Request, res: Response) {
        var id2 = util.formatIdByReq(req);
        var imagem = await imagemModel.getImgByID(id2);
        console.log(imagem)
        res.json(imagem);
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('insert into Imagem set ? ', [req.body])
        res.json({
            message: 'Adicionando Imagem' + req.body
        });
    }

    public async delete(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const info = await pool.query('DELETE FROM Imagem WHERE codImagem = ?', [id]);
        console.log(info);
        res.json({ message: ' imagem deletada' });
    }


    public async fotosCarrosselMain(req: Request, res: Response): Promise<any> {
        // let length: number;
        var list = await imagemModel.getFtsCarrosselMain(req);
        console.log(list)
        res.json(list);
    }

    public async ftosVinicolaByID(req: Request, res: Response): Promise<any> {
        const id = req.params.id;
        var str = id.split(',', 2);
        let list: any[][0];
        let i = 0;
        try {
            for (i = 0; i < 5; i++) {
                list = await pool.query('select Empresa_codEmpresa, pathImagem from Imagem where TipoImagem_codTipoImagem <> 1 and Empresa_codEmpresa = ? ', str[0]);
            }
        } catch (error) {
            console.log(error);
            console.log("Please report this error");
        }
        res.status(200)
        return res.json({ list });

    }

    public async uploadImg(req: Request, res: Response): Promise<any> {
        try {
            let file = req.file;
            if (!file) {
                res.status(401);
                res.json('Something went wrong. Report this error')
            } else {
                if (true) { // se alguma coisa do model for dado como OK (adicionado no db)
                    imagemModel.addImg(file);
                    res.status(200);
                    res.json('- OK');
                } else {
                    res.json('Deu nao migao')
                }
                // Pegar os outros dados da requisicao:
                // Monto o objeto imagem e mando pro metodo p. add!
            }
        } catch (err) {
            console.log(err)
        }
    }



}

export const imagemController = new ImagemController();