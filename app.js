const express = require('express');
const morgan = require('morgan'); //that package make like access logs
const bodyParser = require('body-parser');
const Cors = require('cors'); // that package prevents from cross-origin-resource-sharing

const tweetRoutes = require('./Routes/tweet')

const relations = require('./app/relations');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//routes
app.use('/tweets', tweetRoutes);

app.get('/test', (req,res,next) => {
  relations.User.findAll({
    include: [relations.Tweet]
  }).then(result => {
    res.send(result)
    
  })
})
app.use(Cors())
 
module.exports = app