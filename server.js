// set up express app & required const variables
const express = require('express');
const app = express();
const PORT = 8000;

// creating JSON object
const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
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
// set up :name query parameter
app.get('/api/:name', (request,response) => {
    const rapperName = request.params.name;
    
    if (rappers[rapperName]) {
        response.json(rappers[rapperName]);
    }else{
        response.json(rappers['unknown']);
    }
});


// set up listener to local PORT
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! PoggersChampion Kappa`);
});