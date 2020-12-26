import multer from "multer";


export const storage = multer.diskStorage({
    filename: function (req: Express.Request,
        file: Express.Multer.File,
        cb: (error: Error | null, filename: string) => void) {
        cb(null, Date.now()+'_'+ file.originalname);
    },
    destination: function (req: Express.Request,
        file: Express.Multer.File,
        cb: (error: Error | null, path: string) => void) {
        cb(null, __dirname + './../uploads/');
        // path: server/uploads/
        // dirname -> instancia dessa classe vai rodar dentro de /server/build/
    }
});


export const imgFilter = function (req: Express.Request,
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

