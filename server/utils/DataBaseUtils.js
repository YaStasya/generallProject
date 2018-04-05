import mongoose from 'mongoose';
import '../models/Menu';

const Menu = mongoose.model('Menu');
export function setUpConnection(){
    mongoose.connect('mongodb://localhost/menu')
}

export function ListMenu(){
    return Menu.find()
}