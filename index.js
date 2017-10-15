var http = require('http');

setInterval(
    ()=>{
        http.get({
            host: 'aci-demo-web',
            path: '/'
        }, function(response) {
            // Continuously update stream with data
            var body = '';
            response.on('data', function(d) {
                body += d;
            });
            response.on('end', function() {
                console.log(`${new Date().toISOString()} | API : ${body}`);
            });
        });
    },
    60 * 1000
);