import { tipoEmpresa, tipoImagem } from "../helpers/global";
import { db } from "../knexConnectionPool";
import { Empresa } from "../models/EmpresaModel";

class EmpresaRepository {

    public async getAllVinicolas(): Promise<Empresa[] | Error> {

        try {
            const allVinicolas: Empresa[] = await db<Empresa[]>()
                .from('Empresa')
                .where('TipoEmpresa_codTipoEmpresa', '=', tipoEmpresa.VINICOLA);
            return allVinicolas;
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

    public async getFotosByVinicolaId(empresaId: number): Promise<any | Error> {
        try {
            const fotos = db()
                .from('Imagem')
                .where('Imagem_codEmpresa', '=', empresaId);
            return fotos;
        } catch (error) {
            throw new Error("" + error);
        }
    }

    public async getCarrosselByVinicolaId(empresaId: number): Promise<any | Error> {
        try {
            const carrosselVinicola = db()
                .from('Imagem')
                .where('Imagem_codEmpresa', '=', empresaId)
                .andWhere('TipoImagem_codTipoImagem', '=', tipoImagem.CARROSSEL);

            return carrosselVinicola;
        } catch (error) {
            throw new Error("" + error);
        }
    }

}
export const empresaRepository = new EmpresaRepository();