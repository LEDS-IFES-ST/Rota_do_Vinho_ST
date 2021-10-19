import { Request, Response } from 'express';
import { pool } from '../database';
import { imagemModel } from "../models/imagemModel";
import env from '../helpers/env';
import { imgFilter } from '../middlewares/helper';
import { imagemRepository } from "../repository/ImagemRepository";


class ImagemController {

    public async listaAll(req: Request, res: Response) {
        var list: any;
        list = await imagemModel.getAllImg();
        res.json(list);
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


    public async fotosCarrosselMain(req:Request, res: Response): Promise<any> {
        interface imageData {
            pathImagem: String;
            Empresa_codEmpresa: Number;
        }

        try {
            const carrossel: imageData[] = await imagemRepository.getFtsCarrosselMain();
            
            return res.status(200).json({
                data: carrossel,
                status: 200
            });

        } catch (error) {
            return res.status(500).json({
                error: "[" + "] ->" + Error.captureStackTrace + error,
                status: 500
            });

        }
    }

    public async ftosVinicolaByID(req: Request, res: Response): Promise<any> {
        const id = req.params.id;
        
        try {
            const imagem = await imagemRepository.getFotoById(parseInt(id));
            res.status(200)
            return res.json({ imagem });
        } catch (error) {
            return res.status(500).json({
                error: "[" +"] ->" + Error.captureStackTrace + error,
                status: 500
            });
        }

    }

    public async uploadImg(req: Request, res: Response): Promise<any> {
        // TODO: FIXME::not working propely
        /* 
        -   1) Modularizar
        -   2) Testar o envio via aplicaçao web (nao me lembro se ta funcionando direitinho +)
                -> Obter parametros para validar os envios das imagens (Vinicola associada, tipo de imagem etc..)
                -> Envio por requisiçao pura (????)
        -   ...

        -   3) Validaçao de outras informacoes vindo do frontend (#2)
        */
        try {
            const file = req.file;
            if (!file || file == undefined) {
                res.status(401);
                res.json('[File not found] - Something went wrong. REPORT THIS ERROR')
            } else {
                if (true) { // #3
                    const path: String = await imagemModel.addImg(file);
                    res.status(200).json({
                        status: 200,
                        path: path
                    });
                } else {
                    res.json('Deu nao migao')
                }
            }
        } catch (err) {
            throw new Error("" + err);
        }
    }



}

export const imagemController = new ImagemController();