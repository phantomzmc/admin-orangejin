export class OrderModel {
    constructor(order,orderDetail) {
        this.customerName = order.customer_name;
        this.customerTel = order.customer_tel;
        this.customerAddress = order.customer_address;
        this.orderCreateDate = new Date(order.order_date);
        this.orderDetail = orderDetail
        this.orderPrice = order.order_price
    }
}


export class OrderDetailModel{
    constructor(orderDetail){
        this.number = orderDetail.number
        this.kilo = orderDetail.kilo
        this.quantity = orderDetail.quantity
        this.price = orderDetail.price
        this.shippingPrice = orderDetail.shipping_price
        this.netPrice = orderDetail.net_price
        this.remark = orderDetail.remark
    }
}
