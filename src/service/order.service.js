import firebase from '../database/firebase';
import { OrderModel, OrderDetailModel } from '../model/order.model'
import { sendNotificationLine } from '../proxy/line-notification';

const db = firebase.firestore();
const orders = db.collection("orders");

export async function getOrderList(id) {
    console.log(id);
    return new Promise((resolve, reject) => {
        const orderList = []
        orders.get()
            .then((snapshot) => {
                snapshot.forEach((order) => {
                    // console.log(JSON.stringify(order))
                    if (order.data) {
                        console.log(order.data().customer_name);
                        console.log(order.data().customer_tel);
                        console.log(order.data().customer_address);
                        console.table(order.data().order_date);

                        const dataOrder = new OrderModel(order.data());
                        orderList.push(dataOrder);
                    }
                });
                console.table(orderList);
                resolve(orderList)
            })
            .catch((err) => {
                console.error(JSON.stringify(err));
                throw err
            })
    })
}

export async function createOrder(id, orderDetail) {
    console.log(orderDetail)
    await sendNotificationLine(orderDetail);
    // console.log(JSON.stringify(result));
    // const orderToken = "orderId" + Math.random(999).toString();
    // orders.doc(orderToken).set(orderDetail)
    //     .then(() => {
    //         console.log("insert success")
    //     })
    //     .catch((err) => {
    //         console.err(JSON.stringify(err))
    //     })
}

export function updateOrder(id, orderDetail) {
    console.log(id)
    orders.doc(id).update(orderDetail)
        .then(() => {
            console.log("update success")
        })
        .catch((err) => {
            console.err(JSON.stringify(err))
        })
}

export function deleteOrder(id) {
    orders.doc(id).delete()
        .then(() => {

        })
        .catch((err) => {
            console.error(JSON.stringify(err))
        })
}