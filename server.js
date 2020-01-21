const http = require('http');
const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3000;

// const User = require('./app/models').User;
// const Tweet = require('./app/models').Tweet;

const connection = require('./database/connection');
const promise = new Promise((resolve, reject) => {
    connection.authenticate().then(err => {
        if (err) {
            console.log(err);
        } else {
            resolve('db Connected');
        }
    })
})
// promise.then((result) => {
//     console.log(result);
    
//     User.create({
//         name: 'Htet Linn',
//         email: 'test@gmail.com',
//         password: 'password'
//     }).then(tweet => {
//         tweet.createTweet({
//             tweets: 'this is the test tweet'
//         }).then(() => console.log('data inserted!'));
//     })
// })

const server = http.createServer(app);

server.listen(port, () => { 
    console.log(`server listen at port ${port}`); 
}) 
