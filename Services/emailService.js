const https = require('https');

module.exports = {
    test() {
        console.log("test send email!!! TODO")
    },
    sendEmail: (d) => {
        const data = JSON.stringify({
            "access_key": "f3063698-026f-445a-833c-fe309062c103",
            "email": "test@test.com",
            "subject": "test subject2",
            "message": "text bla lorem"
            });

            const options = {
                hostname: 'api.web3forms.com',
                path: '/submit',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': data.length,
                    "accept": "*/*"
                }
            }

            const request = https.request(options, res => {
            let data = '';
            console.log('Status Code:', res.statusCode);
            res.on('data', chunk => {
                data += chunk;
            })

            res.on('end', () => {
                console.log('Body: ', JSON.parse(data));
                })
            })
            .on('error', err => {
                console.log('Error: ', err.message);
            })

            request.write(data);
            request.end();

    }
}