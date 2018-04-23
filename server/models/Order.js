import mongoose from 'mongoose';
const Schema =  mongoose.Schema;
const OrderSchema = new Schema({
    email           : { type: String, required: true },
    id_film         : { type: String, required: true },
    name_film       : { type: String, required: true },
    date            :{ type: String},
    time            :{ type: String},
    places          :{ type: String},
    row             :{ type: String}
});


const Order = mongoose.model('Order', OrderSchema)