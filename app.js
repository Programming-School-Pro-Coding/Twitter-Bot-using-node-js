const { TwitterApi } = require('twitter-api-v2');
const config = require('./config');
const client =  new TwitterApi(config);
const fetch = require('async-fetch-url').asyncFetchUrl;
let newQuote;
async function getQuotes_tweet(){
    var url = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=text&lang=en&key=457653';
    var response = await fetch(url);
    newQuote = JSON.stringify(response.data);
    console.log(newQuote);
    let tweet = await client.v1.tweet(newQuote);
    console.log(tweet);
}
// Every 1 hour tweet a motivational quote
setInterval(() => {
    getQuotes_tweet();
}, 3600000);