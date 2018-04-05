import mongoose from 'mongoose';
const Schema =  mongoose.Schema;
const MenuSchema = new Schema({
    title       : {type: String, required: true},
    titlePage   : {type: String},
    url         : {type: String}
});
const Menu = mongoose.model('Menu', MenuSchema);