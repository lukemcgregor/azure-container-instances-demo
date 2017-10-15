var request = require('request');

setInterval(
    ()=>{
        console.log(`${new Date().toISOString()}`);
        request('http://localhost/', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
             }
             else{
                 console.log(`${error || response.statusCode}`);
             }
        });
    },
    60 * 1000
);