//* Package Imports
import express from 'express';


// Init
const router = express.Router();






//* Routes

router.get('/', (req, res, next) => {
    return res.status(200).render('upload', {
        layout: 'main',
        title: 'Cloud Cubic Content-Delivery Demo Upload Page'
    });
})





//* Exports
export default router;