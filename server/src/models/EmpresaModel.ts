import { knex } from "knex";

export interface Empresa {
    codEmpresa: number;
    TipoEmpresa_codTipoEmpresa: number;
    nameEmpresa: string;
    infos: string;
    biografia: string;
    email: string;
    linkGoogleMaps: string;
    latitude: string;
    longitude: string;
}