import https from 'https';
import chalk from 'chalk';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const apiKey = '1eeccfb59edc61c8c944107e';
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const convert_currency = (amount, rate) => {
    return (amount*rate).toFixed(2);
}

https.get(url, (res) => {
    let data = "";
    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        const rates = JSON.parse(data).conversion_rates; 
        console.log(rates);       
        rl.question('Enter the amount in USD: ', (amount) => {
            rl.question('Enter the target currency: ', (curr) => {
                const rate = rates[curr.toUpperCase()];
                if(rate){
                    console.log(`${amount} USD is ${convert_currency(amount, rate)} ${curr.toUpperCase()}`)
                } else{
                    console.log(`Invalid Currency Code.`);
                }
                rl.close();
            })
        })
    });

    res.on('error', (err) => {
        console.log(`Error fetching the rate, ${err.message}`);
    });
})