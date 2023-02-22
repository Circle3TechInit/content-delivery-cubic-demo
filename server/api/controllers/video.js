
//* Middleware
import cubicObject  from '../middleware/cubic.js';
import { sortFiles } from '../util/index.js';
import { uploadVideoObject } from '../util/data.js';


//* Route Handlers

const videoRouteHandler = async (req, res, next) => {
    try {
        const cubicHandler = cubicObject(process.env.APP_TOKEN,process.env.APP_ID,12000);
        const videos = await cubicHandler.getCubicSectionSingle('628c8b12a7a22dabe38a70c0', 'video');
        const videoArr = videos.singlesFolderContents;
        return res.status(200).render('video', {
            layout: 'main',
            title: 'Cloud Cubic Content-Delivery Demo Index Page',
            data: {
                videos: videoArr
            }
        });
    } catch (error) {
        return res.status(500).render('error/apperror', {
            layout: 'main',
            title: 'Cloud Cubic Content-Delivery Demo Error Page',
            error: error.message
        });
    }
}


const uploadVideoFileHandler = async (req, res, next) => {
    try {
        const cubicHandler = cubicObject(process.env.APP_TOKEN,process.env.APP_ID,12000);
        const userFiles = req.files;
        const files = sortFiles(userFiles);
        const uploader = await cubicHandler.uploadSectionSingle(uploadVideoObject,'eVideo',files);
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
    videoRouteHandler,
    uploadVideoFileHandler
}