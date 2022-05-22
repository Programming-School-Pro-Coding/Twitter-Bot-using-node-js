# Twitter Bot using node js made by [me](https://github.com/hasnainmakada-99)

This bot tweets motivational quotes on twitter every day so do check it out [here](https://twitter.com/MotivatBt)

This bot is made completely using node JS and the [twitter-api-v2](https://www.npmjs.com/package/twitter-api-v2). The quotes which the bot fetch is from an npm dependency [inspirational-quotes](https://www.npmjs.com/package/inspirational-quotes)

## Getting started
- Fork this repository
- Clone this repository using ```git clone```
- After cloning the repository run ```npm install``` to install the necessary dependencies
- After you have installed the dependencies, Go to the config.js file replace this parameters,
```
const config = {
  appKey: "Enter your api key",
  appSecret: "Enter your api key secret",
  accessToken: "Enter your access token",
  accessSecret: "Enter your access token secret",
}

module.exports = config;
```
- After replacing the parameters run ```node app.js``` and boom see your twitter account.

### This project is open for everyone to contribute to it so feel free to raise issues and improve the codebase