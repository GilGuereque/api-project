// set up express app & required const variables
const express = require('express');
const app = express();
const PORT = 800

// get requests for file system:
app.get('/', (req,res) => {
    response.sendFile(__dirname + '/index.html');
});


// set up listener to local PORT
app.listen(PORT, () => {
    console.log(`Ther server is now running on port ${PORT}! PoggersChampion Kappa`);
});