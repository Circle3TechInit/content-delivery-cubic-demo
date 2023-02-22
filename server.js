//* Package Imports
import http from 'node:http';
import os from 'node:os';


//* Global vars
const port = process.env.PORT || 5000;


//* Init
import app from './server/app.js';
const environment = process.env.NODE_ENV;
const server = http.createServer(app);






// Server Broadcast
server.listen(port, () => {
    console.log(`Server running in ${environment} mode  on PORT:${port}`)
});
server.timeout = 12000;