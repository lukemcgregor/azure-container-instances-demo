var request = require('request');

setInterval(
    ()=>{
        console.log(`${new Date().toISOString()}`);
        request('http://aci-demo-web/', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
             }
             else{
                 console.log(`${response.statusCode} : ${error}`);
             }
        });
    },
    60 * 1000
);