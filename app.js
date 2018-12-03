
// TWITTER

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'PUkxU7uF7XSERzvkLRXcaF3KT',
  consumer_secret: 'm3MOonteKhHJfkeM06uKflBHq65upcZgwjhr3GGn7L8NAvlT3M',
  access_token_key: '432833533-82ju58RvVD5W4bFLR6so37DewaDEuScYloU3I9Ts',
  access_token_secret: 'oWv5Wx4BkZsoK85fCqrFGGYg0o49yxadx2D6fkVxOT5Dt'
});

// POST
var status = 'The best of house music in the web is here - yomassiverecords.ml #house #music #housemusic';
setInterval(function(){
  client.post('statuses/update', {status: status+' '+new Date().getMilliseconds()},  function(error, tweet, response) {
    if(error) throw error;
  });
}, 8*60*60*1000);

// var params = {screen_name: 'Portal_63'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     // console.log(tweets);
//   }
// });

// END OF TWITTER
