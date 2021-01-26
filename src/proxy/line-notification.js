import axios from 'axios';
const instance = axios.create();
const queryString = require('query-string');



export async function sendNotificationLine(customer) {
    let msg = `${customer.customerName} เบอร์โทร ${customer.customerTel} ${customer.customerAddress} \n เบอร์ : ${customer.customerOrder}`;
    console.log(msg);
    let message = {
        message: msg
    }


    const result = await axios({
        method: 'GET',
        url: "https://admin-jintana-farm.herokuapp.com/",
        // data: {
        //     message: msg
        // },
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //     Authorization: 'Bearer 3DOWa249oqswtKnejutokN5aDdcZMv2F5MtPMP7IwfK'
        // }
    })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(JSON.stringify(err));
        });
    return result
    // const response = await fetch("https://admin-jintana-farm.herokuapp.com/", {
    //     method: "GET",
    //     mode: "no-cors"
    // });
    // console.log(response)
    // return response

    // const response = await fetch("https://api.my-awesome-app.com/some_resource", {
    //     method: "GET",
    //     mode: "cors",
    //     headers: {
    //         "Authorization": `Bearer: ${token}`,
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(data)
    // });
    // console.log(response.json())
}