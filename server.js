// set up express app
const express = require('express');
const app = express();

// get requests for file system:
app.get('/', (req,res) => {
    response.sendFile(__dirname + '/index.html');
});