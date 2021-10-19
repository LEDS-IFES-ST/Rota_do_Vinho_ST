import e, { Request, Response } from 'express';
import { Empresa } from "../models/EmpresaModel";
import { empresaRepository } from "../repository/EmpresaRepository";

class VinicolaController {

    public async listaVinicolas(req: Request, res: Response) {

        try {
            const vinicolas: Empresa[] | Error = await empresaRepository.getAllVinicolas();
            res.status(200).json({
                data: vinicolas,
                status: 200
            });

        } catch (error) {
            res.status(500).json({
                error: "[" +"] ->" + Error.captureStackTrace + error,
                status: 500
            });

        }
    }

    public async informacoesEmpresaById(req: Request, res: Response): Promise<Response> {
        const idEmpresa: number = parseInt(req.params.id);

        try {
            const infosEmpresa = await empresaRepository.getInformacoesGeraisById(idEmpresa);
            return res.status(200).json({
                data: infosEmpresa,
                status: 200
            })
        } catch (error) {
            return res.status(400).json({
                error: "["+"] ->" + Error.captureStackTrace + error,
                status: 400
            });
        }
    }





}
export const vinicolaController = new VinicolaController();