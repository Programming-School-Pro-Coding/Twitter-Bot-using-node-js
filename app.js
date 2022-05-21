const { TwitterApi } = require('twitter-api-v2');
const config = require('./config');
const  quotes = require('inspirational-quotes');
const client =  new TwitterApi(config);
const quote = quotes.getQuote().text;
const author = quotes.getQuote().author;

const tweetQuote = async () =>{
    let tweet = await client.v1.tweet(`${quote}\nBy - ${author}`);
    console.log(tweet); // for testing purposes
}

tweetQuote();

