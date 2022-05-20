const {TwitterApi} = require('twitter-api-v2');

const config = require('./config').default;

const client = new TwitterApi(config);

const sendTweet = async ()=>{
    let res = await client.v1.tweet('Hello world');
    console.log(res);
}

sendTweet();