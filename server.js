// set up express app & required const variables
const express = require('express');
const app = express();
const PORT = 8000

// get requests for file system:
app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html');
});


// set up listener to local PORT
app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}! PoggersChampion Kappa`);
});