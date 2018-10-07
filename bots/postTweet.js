var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);
// RETWEET BOT ==========================
//TODO: MAKE BOT TO RESPOND MESSAGES AUTOMATICALLY
//These functions are to retrieve the most popular twitts
var hashtags = require('./data/hashtags');
//MUT COMBINE THESE TWITTS WITH THE ONES THAT I RETRIEVED

//-----------------------------------------------------------------------------------
//This section is to post custom tags retrieved from the instructions above
//ARRAY of MyWay Trip
var dataTwitts = require('./data/posts');

function getHashTags(inputText) {
    var regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;
    var matches = [];
    var match;
    while ((match = regex.exec(inputText))) {
        matches.push(match[1]);
    }
    return matches;
}

function postTwitt() {
    //Here we select randomly from the array
    var status = hashtags[Math.floor(Math.random() * hashtags.length)];
    console.log('CONTENT SELECTED');
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
            if (data.statuses.length > 0) {
                // extract information of the twitt
                //POST 
                var textDataList = [];
                var hashtagsDataList = [];
                data.statuses.forEach(element => {
                    textDataList.push(element.text);
                });
                textDataList.forEach(element => {
                    var currentListHashtags = getHashTags(textDataList);
                    currentListHashtags.forEach(element => {
                        hashtagsDataList.push(element);
                    });
                });
                var uniqueHashtags = [];
                for (let i = 0; i < hashtagsDataList.length; i++) {
                    if (uniqueHashtags.indexOf(hashtagsDataList[i]) == -1) {
                        uniqueHashtags.push(hashtagsDataList[i])
                    }
                }
                if (uniqueHashtags.length > 0) {
                    console.log(uniqueHashtags);

                    var status = "";
                    //This is the random pickup of the data twitts
                    status += dataTwitts[Math.floor(Math.random() * hashtags.length)].status + " ";
                    var counter = 0;
                    while (status.length < 150) {
                        //unique hasshtags are retrieved and hastags are inserted by the programmer
                        status += "#" + uniqueHashtags[counter] + " " + hashtags[counter] + " ";
                        counter++;
                    }
                    console.log(status);
                    var params = {
                        'status': status
                    }
                    Twitter.post('statuses/update', params, function (err, response) {
                        if (response) {
                            console.log(response);
                            console.log('Posted!!!');
                        }
                        // if there was an error while tweeting
                        if (err) {
                            console.log(err);
                            console.log('Something went wrong while Posting... Duplication maybe...');
                        }
                    });

                } else {
                    console.log('Twitt not found');
                    postTwitt();
                }
            } else {
                console.log('Twitt not found');
                postTwitt();
            }
        }
        // if unable to Search a tweet
        else {
            console.log('Something went wrong while SEARCHING...');
        }
    });
}

postTwitt();
setInterval(postTwitt, 2100000);
