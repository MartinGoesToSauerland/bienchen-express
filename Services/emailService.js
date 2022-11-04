const https = require('https');

module.exports = {
    test(d = null) {
        console.log("test send email!!! TODO", d)
        return d;
    },
    sendEmail: (d) => { 

        const defaultValues = {
            "access_key": process.env.WEB3FORMS_SECRET_KEY,
            "subject": "BienchenOase Contact Form",
        }
        const mergedData = {...defaultValues, ...d.data}
      
        const data = JSON.stringify(mergedData);
        console.log(data);

        const options = {
            hostname: 'api.web3forms.com',
            path: '/submit',
            method: 'POST',
            headers: {
                'user-agent': 'myapp/2022.6.0',
                'content-type': 'application/json',
                'content-length': data.length,
                'accept': '*/*'
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