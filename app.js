
// TWITTER

var Twitter = require('twitter');
var config = require('./config');
var client = new Twitter(config);

// POST
var status = 'The best house music in the web is here - yomassiverecords.ml #house #music #housemusic';
setInterval(function(){
  client.post('statuses/update', {status: status+' '+new Date().getMilliseconds()},  function(error, tweet, response) {
    if(error) throw error;
  });
}, 30*60*1000);//minutes*seconds*mseconds

// var params = {screen_name: 'Portal_63'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     // console.log(tweets);
//   }
// });

// END OF TWITTER