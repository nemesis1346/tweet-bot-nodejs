var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);
// RETWEET BOT ==========================
var hashtags=require('./data/reTweetHashtags');
var retweet = function () {
    var status = hashtags[Math.floor(Math.random() * hashtags.length)];
    console.log('STATUS');
    console.log(status);
    var params = {
        q: status,
        result_type: 'recent',
        lang: 'en'
    }

    Twitter.get('search/tweets', params, function (err, data) {
        // if there no errors
        if (!err) {
            console.log(data);
            // grab ID of tweet to retweet
            if(data.statuses.length>0){
                var retweetId = data.statuses[0].id_str;
                // Tell TWITTER to retweet
                Twitter.post('statuses/retweet/:id', {
                    id: retweetId
                }, function (err, response) {
                    if (response) {
                        console.log('Retweeted!!!');
                    }
                    // if there was an error while tweeting
                    if (err) {
                        console.log('Something went wrong while RETWEETING... Duplication maybe...');
                    }
                });
            }else{
                retweet();
                console.log('Twitt not found');
            }
           
        }
        // if unable to Search a tweet
        else {
            console.log('Something went wrong while SEARCHING...');
        }
    });
}
// grab & retweet as soon as program is running...
retweet();
// retweet in every 50 minutes
setInterval(retweet, 2100000);