const http = require('http');
const app = require('./app/app.js');
require('dotenv').config();

http.createServer(app).listen(process.env.port, ()=>{
    console.log('Server is running at port '+ process.env.port);
})