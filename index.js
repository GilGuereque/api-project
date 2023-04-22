// set up express app & required const variables
const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const PORT = process.env.PORT || 8000;
require('dotenv').config();

// set up DB connection
let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'rap'

    MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
        .then(client => {
            console.log(`Connected to ${dbName} Database`)
            db = client.db(dbName)
        });

        // use cors package
app.use(cors());

//use ejs and access public folder
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// // creating JSON object
// const rappers = {
//     '21 savage': {
//         'age': 29,
//         'birthName': 'Shéyaa Bin Abraham-Joseph',
//         'birthLocation': 'London, England'
//     },
//     'chance the rapper': {
//         'age': 29,
//         'birthName': 'Chancelor Bennett',
//         'birthLocation': 'Chicago, Illinois'
//     },
//     'unknown':{
//         'age': 0,
//         'birthName': 'unknown',
//         'birthLocation': 'unknown'
//     }
// };

// // Create GET requests for file system:
// app.get('/', (request,response) => {
//     //response.send("Express on Vercel");
//     response.sendFile(__dirname + '/index.html');
// });

// DB GET request
app.get('/',(request,response) => {
    db.collection('rappers').find().sort({likes: -1}).toArray()
    .then(data => {
        response.render('index.ejs', { info: data})
    })
    .catch(error => console.error(error));
});

// POST request to DB connection
app.post('/addRapper', (request, response) => {
    db.collection('rappers').insertOne({stageName: request.body.stageName,
    birthName: request.body.birthName, likes: 0})
    .then(result => {
        console.log('Rapper Added')
        response.redirect('/')
    })
    .catch(error => console.error(error));
});


// PUT request to DB connection
app.put('/addOneLike', (request, response) => {
    db.collection('rappers').updateOne({stageName: request.body.stageNameS, birthName: request.body.birthNameS,likes: request.body.likesS},{
        $set: {
            likes:request.body.likesS + 1
          }
    },{
        sort: {_id: -1},
        upsert: true
    })
    .then(result => {
        console.log('Added One Like')
        response.json('Like Added')
    })
    .catch(error => console.error(error))

})


// delete request to DB
app.delete('/deleteRapper', (request, response) => {
    db.collection('rappers').deleteOne({stageName: request.body.stageNameS})
    .then(result => {
        console.log('Rapper Deleted')
        response.json('Rapper Deleted')
    })
    .catch(error => console.error(error))
});

// // Create GET request for JSON 
// // set up :name query parameter
// app.get('/api/:name', (request,response) => {
//     const rapperName = request.params.name.toLowerCase();
    
//     if (rappers[rapperName]) {
//         response.json(rappers[rapperName]);
//     }else{
//         response.json(rappers['unknown']);
//     }
// });


// Initialize server
app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}! PoggersChampion Kappa`);
});

// Export the Express API
module.exports = app;