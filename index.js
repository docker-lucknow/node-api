'use strict'

const express = require('express');
const app = module.exports = express()
const port = 3000

app.get('/', function(req, res){
  res.json({'message': 'Welcome to Docker Lucknow Meetup!'});
});

app.listen(port, () => {
  console.log('Express started on port 3000');
})