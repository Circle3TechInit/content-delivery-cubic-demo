//* Package Imports
import express from 'express';


// Init
const router = express.Router();


//* Middleware
import upload from '../util/fileupload.js'
import { videoRouteHandler, uploadVideoFileHandler } from '../controllers/video.js';





//* Routes

router.get('/', videoRouteHandler);

router.post('/uploadfile', upload,uploadVideoFileHandler);









//* Exports
export default router;