import { pool } from "../database";
import { Request, Response } from 'express';
import { tipoImagem } from "../helpers/global";
import env from "../helpers/env";

    /* Tipos imagem
        1 | Logomarca
        2 | Carrossel 
        3 | Fotos
     */

class ImagemModel {

    public getAllImg(): Promise<Response>{
        let list: any;
        list = pool.query('select * from Imagem');
        return list;
    }

    public getImgByID(imgIdEmpresa: string): Promise<Response>{
        let img: any; 
        img = pool.query('select * from Imagem where Empresa_codEmpresa =?', imgIdEmpresa)
        console.log(img)
        return img;
    }

    /*
    Metodo pra busca de fotos para montagem do carrossel da pag. principal
    Uma foto de cada vinicola 
    Adicionar ao array final p. retornar path e codEmpresa
    TODO:// fix for - length query - 
    */
    public getFtsCarrosselMain(req: Request): Promise<any> {
        let list: any;
        let i = 0;
        try {
            for (i = 0; i < 5; i++) {
                list =  pool.query('select pathImagem, Empresa_codEmpresa from Imagem where TipoImagem_codTipoImagem = ?', tipoImagem.CARROSSEL);
            }
        } catch (error) {
            console.log(error);
            console.log("Please report this error");
        }
        return list;
    }


    public addImg(file: Express.Multer.File){
        var imgName = file.filename;
        // //
        var fakeData = { 
            Empresa_codEmpresa: 1,
            TipoImagem_codTipoImagem: tipoImagem.FOTOS,
            pathImagem: env.staticFilesLink+imgName,
            descImagem: 'Dados falsos',
            ordemApresentacao: 1,
        }
        // //
        pool.query('insert into Imagem set ?', [fakeData])

    }

}
export const imagemModel = new ImagemModel(); 