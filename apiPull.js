var request = require('request');
var program = require('commander');

function myreq(){request({
	url: 'http://samples.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=b1b15e88fa797225412429c1c50c122a1',
	json: true
}, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  //console.log('body:', body); // Print the HTML for the Google homepage. 


  for (var i=0; i<body['list'].length; i++){
  	console.log(body['list'][i]['name']);
  }
});
}


 
program
/*  .version('0.0.1')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')*/
  .option('-p, --print', 'Prints name', myreq())
  .parse(process.argv);