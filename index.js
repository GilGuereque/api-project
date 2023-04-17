// set up express app & required const variables
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

// use cors package
app.use(cors());

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

// Create GET requests for file system:
app.get('/', (request,response) => {
    //response.send("Express on Vercel");
    response.sendFile(__dirname + '/index.html');
});

// Create GET request for JSON 
// set up :name query parameter
app.get('/api/:name', (request,response) => {
    const rapperName = request.params.name.toLowerCase();
    
    if (rappers[rapperName]) {
        response.json(rappers[rapperName]);
    }else{
        response.json(rappers['unknown']);
    }
});


// Initialize server
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! PoggersChampion Kappa`);
});

// Export the Express API
module.exports = app;