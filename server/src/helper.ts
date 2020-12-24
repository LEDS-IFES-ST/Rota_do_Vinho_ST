import multer from "multer";

class Helper {
    constructor() {}



    public uploads(s: String) {
        const upload = multer({
            dest: './teste'
        })
    }
}
const helper = new Helper();
export default helper.uploads