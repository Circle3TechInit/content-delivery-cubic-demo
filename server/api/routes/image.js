//* Package Imports
import express from 'express';


// Init
const router = express.Router();


//* Middleware
import upload from '../util/fileupload.js'
import { homeRouteHandler, uploadFileHandler } from '../controllers/image.js';






//* Routes
router.get('/', homeRouteHandler);

router.post('/uploadfile', upload, uploadFileHandler);









//* Exports
export default router;
