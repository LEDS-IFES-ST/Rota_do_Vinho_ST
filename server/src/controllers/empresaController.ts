import { pool } from '../database';
import { Request, Response } from 'express';

class EmpresaController {

    // DEPRECATED
    public async listaVinicolas(req: Request, res: Response) {
        const vinicolas = await pool.query('select * from Empresa where TipoEmpresa_codTipoEmpresa = 2');

        return res.status(200).json({
            vinicolas
        });
    }

    // DEPRECATED
    public async getAvistInfo(req: Request, res: Response): Promise<any> {
        const avist = await pool.query('select * from Empresa where Empresa.nomeEmpresa = "Avist"');
        return res.json(avist);
    }

    // DEPRECATED
    public async getEmpresaByID(req: Request, res: Response): Promise<any> {
        const id = req.params.id;
        var str = id.split(',', 2);
        const empresa = await pool.query('select * from Empresa where codEmpresa = ?', str[0]);
        res.json(empresa);
    }

    // DEPRECATED
    public async showAll(req: Request, res: Response) {
        const empresas = await pool.query('select * from Empresa');
        res.json(empresas);
    }

    // DEPRECATED
    public async addEmpresa(req: Request, res: Response) {
        await pool.query('insert into Empresa set ? ', [req.body]);
        res.json({
            text: 'Adicionando empresa: ' + req.body.nomeEmpresa + ' <-',
            retorno: req.body
        });
    }
}
export const empresaController = new EmpresaController();