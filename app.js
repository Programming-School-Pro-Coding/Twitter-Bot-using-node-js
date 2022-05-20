const {TwitterApi} = require('twitter-api-v2');

const quote = require('inspirational-quotes');

const config = require('./config');

const client = new TwitterApi(config);

const getQuote = async()=>{
    let getdata = await client.v1.post('statuses/update.json', {status: quote.getRandomQuote()}, {forceBodyMode: 'url'});
    console.log(getdata);
}