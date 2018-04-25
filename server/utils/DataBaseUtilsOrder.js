import mongoose from 'mongoose';
import '../models/Order';

const Order = mongoose.model('Order');
export function setUpConnection(){
    mongoose.connect('mongodb://localhost/order')
}

export function ListOrder(email){
    return Order.find({email:email});
}

export function createOrder(data) {
    const order = new Order({
        email           : data.email,
        id_film         : data.id_film,
        name_film       : data.name_film,
        date            : data.date,
        time            : data.time,
        places          : data.places,
        row             : data.row,
        createdAt: new Date()
    });

    return order.save();
}