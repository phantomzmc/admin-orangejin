

async function sendNotificationLine(customer) {
    const result = await axios({
        method: "post",
        url: "https://notify-api.line.me/api/notify",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Bearer [token]",

        },
        data: 'message=你好哇'
    })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = {
    sendNotificationLine
}