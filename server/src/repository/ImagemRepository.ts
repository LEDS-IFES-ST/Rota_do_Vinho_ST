import env from "../helpers/env";
import { tipoEmpresa, tipoImagem } from "../helpers/global";
import { db, queryBuilder } from "../knexConnectionPool";
import { Empresa } from "../models/EmpresaModel";

class ImagemRepository {

    public async getFtsCarrosselMain(): Promise<any> {

        try {
            const data = await db()
                .from('Imagem')
                .select('pathImagem', 'Empresa_codEmpresa')
                .where('TipoImagem_codTipoImagem', '=', tipoImagem.CARROSSEL);
            return data;
        } catch (error) {
            throw new Error("[" +"] ->" + Error.captureStackTrace)
        }

    }


    public async getInformacoesGeraisById(empresaId: number): Promise<any | Error> {
        try {
            const infosGerais: Empresa | any = await db()
                .from('Empresa')
                .rightJoin('Endereco', function () { this.on('codEmpresa', '=', 'Empresa_codEmpresa') })
                .rightJoin('Imagem', function () { this.on('Endereco.Empresa_codEmpresa', '=', 'Imagem.Empresa_codEmpresa') })
                .rightJoin('Informacao', function () { this.on('Imagem.Empresa_codEmpresa', '=', 'Informacao.Empresa_codEmpresa') })
                .where('codEmpresa', '=', empresaId);
            return infosGerais;
        } catch (error) {
            throw new Error("[" +"] ->" + Error.captureStackTrace)
        }
    }

    public async getFotoById(id: Number): Promise<any> {
        try {
            const foto = await db()
            .from('Imagem')
            .select('codImagem, pathImagem')
            .where('codImagem', '=', ""+id);
            return foto;
        } catch (error) {
            throw new Error("[" +"] ->" + Error.captureStackTrace)
        }
    }
    public async addImg(file: Express.Multer.File): Promise<String> {
        var imgName = file.filename;
        // //
        var fakeData = {
            Empresa_codEmpresa: 1,
            TipoImagem_codTipoImagem: tipoImagem.FOTOS,
            pathImagem: env.staticFilesLink + imgName,
            descImagem: 'Dados falsos',
            ordemApresentacao: 1,
        }
        db('Imagem').insert(fakeData);
        return fakeData.pathImagem;
    }
}
export const imagemRepository = new ImagemRepository();