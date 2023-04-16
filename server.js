// set up express app & required const variables
const express = require('express');
const app = express();
const PORT = 8000;

// creating JSON object
const rappers = {
    '21 Savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'Chance the Rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
};

// get requests for file system:
app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html');
});

// get request for JSON 
app.get('/api', (request,response) => {
    response.json(rappers);
});


// set up listener to local PORT
app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}! PoggersChampion Kappa`);
});