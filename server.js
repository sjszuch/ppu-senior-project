

const http = require('http');
const options = {
    hostname: 'https://www.nginx.com/', // update with NGINX server url
    port: 443,
    path: '/data', // update with NGINX path
    method: 'GET'
};

const req = http.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log(JSON.parse(data)); 
    });
});

req.on('error', (error) => {
    console.error('Error:', error);
});
req.end();
