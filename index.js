var rita = require('rita');
var Twit = require('twit');
var fs = require('fs');

var bot = new Twit({
    consumer_key: process.argv[5],
    consumer_secret: process.argv[6],
    access_token: process.argv[7],
    access_token_secret: process.argv[8],
    timeout_ms: 10 * 1000
});
function readAndStoreTweets(bot, twitterSourceUsername, targetFilename, maxId) {
    var options = { screen_name: twitterSourceUsername,
                    include_rts: false,
                    exclude_replies: true,
                    trim_user: true,
                    count: 200, 
                    max_id: maxId };
    bot.get('statuses/user_timeline', options, function(err, data) {
        var tweetStream = "";  
        var highest_id = null;
        for (var i = 1; i < data.length ; i++) {
            var line = data[i].text;
            console.log(data[i].created_at);
            line = line.replace(/@\w+/g, "");
            line = line.replace(/^\s+/g, "");
            var patt = new RegExp(/[\?!;.,]{1}/);
            if (!patt.test(line.charAt(line.length-1))) {
                line += ".";
            }
            tweetStream += line + "\n";
            if (highest_id == null || data[i].id < highest_id) {
                highest_id = data[i].id;
            }
        }
        console.log(highest_id);
        fs.appendFile(targetFilename, tweetStream, err => {
            if (err) {
                console.error(err)
                return
            }
        })
    })
}


function callbackSendTweet(bot, sentence) {
    bot.post('statuses/update', {status: sentence}, function(err, data, response) {
        if (err){
            console.log(err);
        }
    });
}

function generateSentence(filename, callback, callbackParam, minLength, maxLength) {
    var markov = new rita.RiMarkov(2);
    fs.readFile(filename, "utf8", function (err, text) {
        if (err) {
            throw err;
        }
        markov.loadText(text);
        var sentence = "";
        while (sentence.length < minLength || sentence.length > maxLength) {
            sentence = markov.generateSentence();
        }
        if (callbackParam != undefined) {
            callback(callbackParam, sentence);
        } else {
            callback(sentence);
        }
        return sentence;
    });
}

/*
Central controller
*/
var twitterSourceUsername = process.argv[3];
var filename = process.argv[4];
var maxId = process.argv[9] == undefined ? 1 : process.argv[9]; 

switch(process.argv[2]) {
case 'read':
        readAndStoreTweets(bot, twitterSourceUsername, filename, maxId);
        break;
    case 'send':
        generateSentence(filename, callbackSendTweet, bot, 12, 160);
        break;
    case 'test':
        generateSentence(filename, console.log, undefined, 12, 160);
        break;
        default:
        console.log("instructions unclear, no actions taken.");
        break;
}
