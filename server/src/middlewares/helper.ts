import multer from "multer";


// Config do middleware do Multer (file uploading)
export const storage = multer.diskStorage({
    filename: function (req: Express.Request,
        file: Express.Multer.File,
        cb: (error: Error | null, filename: string) => void) {
        cb(null, Date.now()+'_'+ file.originalname);
    },
    destination: function (req: Express.Request,
        file: Express.Multer.File,
        cb: (error: Error | null, path: string) => void) {
        cb(null, __dirname + '../../../uploads/');
        // path: server/uploads/
        // dirname -> instancia dessa classe vai rodar dentro de /server/build/
    }
});


export const imgFilter = function (req: Express.Request,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: boolean) => void) {
    var fileFormat = file.mimetype.split('/')[1].toLocaleLowerCase();
    try {
        if (fileFormat == 'jpeg'|| fileFormat == 'jpg' || fileFormat == 'png') {
            cb(null, true);
        } else {
            cb(null, false);
        }
    } catch (error) {
        console.log("-----", error)
    }
}