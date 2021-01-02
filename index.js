const superagent = require('superagent');

// Disable TLS certificates verification
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

//Base Url
const BASE_URL = "https://sandbox-api.payosy.com/api/get_qr_sale";

const requestQRCode = (price) =>{
    superagent.post(BASE_URL)
    .set(
        {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-ibm-client-id': 'd56a0277-2ee3-4ae5-97c8-467abeda984d',
        'x-ibm-client-secret': 'U1yT3qD2jW6oO4uH8gB8bN1xW0xH3aL7jN2lT7dP5aL5rQ1vK4'
        }
    ).send({
        "totalReceiptAmount":price
    }).then(
        data => console.log(data.body)
    ).catch(e => console.log(e));
};


requestQRCode(100);