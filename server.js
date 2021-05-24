'use strict';


const express = require('express');
const pokeData = require('./assets/poke.json')

const server = express();

const PORT = 3001;

// http://localhost:3001/
server.get('/', (req, res) => {
    res.send('home route')
})

// http://localhost:3001/test
server.get('/test', (request, response) => {
    let str = 'hello from back end';
    response.status(200).send(str);
})

// // http://localhost:3001/getPoke
// server.get('/getPoke',(req,res)=>{
//     console.log(pokeData);
//     let pokeNames = pokeData.results.map(item=>{
//         return item.name;
//     })
//     res.send(pokeNames)
// })

// http://localhost:3001/getPoke?pokeName=bulbasaur
server.get('/getPoke', (req, res) => {
    console.log(req.query)
    let pokeNameData= req.query.pokeName
    let pokeItem = pokeData.results.find(item => {
        if (item.name == pokeNameData)
            return item
    })
    res.send(pokeItem)
})


server.get('*', (req, res) => {
    res.send('not found');
})


server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})

