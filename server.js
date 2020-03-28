'use strict';

const express = require('express');
const server = express();

const PORT =  process.env.PORT || 3000;

server.use(express.static('./public'))

server.get('/test' , (request , response) => {
   response.send('Your test worked !');
});

server.get('/data' , (request , response)=>{
    let family = [
        {name: 'Reham'},
        {name : 'Wael'},
        {name : 'Ahmad'},
        {name : 'Layan'}
    ];
    response.json(family);
});
server.listen( PORT , 
    () => console.log('Listening on port' , PORT));