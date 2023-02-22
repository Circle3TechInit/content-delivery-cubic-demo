//* Package Import
import express from 'express';
import { engine } from 'express-handlebars';
import cors from 'cors';
import compression from 'compression';
import dotenv from 'dotenv';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';


//* Global Vars
const __dirname = dirname(fileURLToPath(import.meta.url));
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};


//* Init
const app = express();
dotenv.config({ path: join(__dirname, 'config', 'config.env') });


//* Middleware Setup
app.use(cors(corsOptions));

app.use(compression());

// View Engine
app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: join(__dirname,'views/layouts')
}));
app.set('view engine', '.hbs');
app.set('views', join(__dirname,'views'))
//  app.enable('view cache');

// Static Asserts Folder
app.use(express.static(join(__dirname, '../public')));

// Parse incoming request body middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes Import
import indexRoutes from './api/routes/index.js';
import imageRoutes from './api/routes/image.js';
import audioRoutes from './api/routes/audio.js';
import videoRoutes from './api/routes/video.js';

// Cors error handler
app.use((req, res, next) => {
    res.header('Access-Control-Allow-origin', '*');
    res.header('Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Routes Use
app.use('/', indexRoutes);
app.use('/image', imageRoutes);
app.use('/audio', audioRoutes);
app.use('/video', videoRoutes);

// 404 Page Not Found Error handling
app.use((req, res, next) => {
    return res.status(404).render('error/apperror', {
        layout: 'main',
        title: 'Cloub Cubic Content-Delivery Demo Error Page',
        error: 'Error 404: Page Not Found !!!'
    });
});

// All application's errors handler
app.use((error, req, res, next) => {
    console.log(error)
    res.status(error.status || 500);
    return res.render('error/apperror', {
        layout: 'main',
        title: 'Cloub Cubic Content-Delivery Demo Error Page',
        error: error.message
    });
});


// Export App
export default app;
