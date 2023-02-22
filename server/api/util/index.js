
//* Fn
const sortFiles = (filesArr) => {
    try {
        let newFilesArr = [];
        if(!Array.isArray(filesArr) || filesArr.length == 0)
            throw new Error('Files array is empty !!!');
        filesArr.forEach(file => {
            const { originalname, size, encoding, path, mimetype } = file;
            const newFileObject = {
                originalFilename: originalname,
                size,
                filepath: path,
                mimetype,
                originalname: originalname
            }
            newFilesArr.push(newFileObject)
        });
        return newFilesArr;
    } catch (error) {
        throw new Error(error);
    }
}

const convertObject = (object) => {
    return [object];
}



//* Exports
export {
    sortFiles,
    convertObject
}