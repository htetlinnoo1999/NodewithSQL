const express = require('express');
const morgan = require('morgan'); //that package make like access logs
const bodyParser = require('body-parser');
const Cors = require('cors'); // that package prevents from cross-origin-resource-sharing

const tweetRoutes = require('./Routes/tweet')

const User = require('./app/models').User;
const Tweet = require('./app/models').Tweet;

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
  User.findAll({
    include: [Tweet]
  }).then(result => {
    res.send(result)
    
  })
})
app.use(Cors())
 
module.exports = app