import { Request } from "express";
class Util{

    public formatIdByReq(req: Request){
        const id = req.params.id;
        var str = id.split(',', 2);
        return str[0];
    }
}

export const util = new Util();