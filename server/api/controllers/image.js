
//* Middleware
import cubicObject  from '../middleware/cubic.js';
import { sortFiles } from '../util/index.js';
import { uploadObject } from '../util/data.js';



//* Route Handlers
const homeRouteHandler = async (req, res, next) => {
    try {
        const cubicHandler = cubicObject(process.env.APP_TOKEN,process.env.APP_ID,12000);
        const images = await cubicHandler.getCubicSectionSingle('628c8b12a7a22dabe38a70c0', 'image');
        const imageArr = images.singlesFolderContents;
        return res.status(200).render('image', {
            layout: 'main',
            title: 'Cloud Cubic Content-Delivery Demo Image Page',
            data: {
                images: imageArr
            }
        });
    } catch (error) {
        console.log(error)
        return res.status(500).render('error/apperror', {
            layout: 'main',
            title: 'Cloud Cubic Content-Delivery Demo Error Page',
            error: error.message
        });
    }
}


const uploadFileHandler = async (req, res, next) => {
    try {
        const cubicHandler = cubicObject(process.env.APP_TOKEN,process.env.APP_ID,12000);
        const userFiles = req.files;
        const files = sortFiles(userFiles);
        const uploader = await cubicHandler.uploadSectionSingle(uploadObject,'eImage',files);
        return res.status(200).render('upload', {
            layout: 'main',
            title: 'Cloud Cubic Content-Delivery Demo Upload Page',
            message: uploader.message
        });
    } catch (error) {
        return res.status(500).render('error/apperror', {
            layout: 'main',
            title: 'Cloud Cubic Content-Delivery Demo Error Page',
            error: error.message
        });
    }
}


// Exports
export {
    homeRouteHandler,
    uploadFileHandler
}