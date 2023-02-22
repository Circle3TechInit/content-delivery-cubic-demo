
//* Middleware
import cubicObject  from '../middleware/cubic.js';
import { sortFiles } from '../util/index.js';
import { uploadAudioObject } from '../util/data.js';


//* Route Handlers

const audioRouteHandler = async (req, res, next) => {
    try {
        const cubicHandler = cubicObject(process.env.APP_TOKEN,process.env.APP_ID,12000);
        const audio = await cubicHandler.getCubicSectionSingle('628c8b12a7a22dabe38a70c0', 'music');
        const audioArr = audio.singlesFolderContents;
        return res.status(200).render('audio', {
            layout: 'main',
            title: 'Cloud Cubic Content-Delivery Demo Audio Page',
            data: {
                audio: audioArr
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


const uploadAudioFileHandler = async (req, res, next) => {
    try {
        const cubicHandler = cubicObject(process.env.APP_TOKEN,process.env.APP_ID,12000);
        const userFiles = req.files;
        const files = sortFiles(userFiles);
        const uploader = await cubicHandler.uploadSectionSingle(uploadAudioObject,'eMusic',files);
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
    audioRouteHandler,
    uploadAudioFileHandler
}