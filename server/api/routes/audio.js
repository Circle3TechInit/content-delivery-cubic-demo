//* Package Imports
import express from 'express';


// Init
const router = express.Router();


//* Middleware
import upload from '../util/fileupload.js'
import { audioRouteHandler, uploadAudioFileHandler } from '../controllers/audio.js';





//* Routes

router.get('/', audioRouteHandler);

router.post('/uploadfile', upload, uploadAudioFileHandler);








//* Exports
export default router;