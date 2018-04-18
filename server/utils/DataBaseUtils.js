import mongoose from 'mongoose';
import '../models/Menu';

const Menu = mongoose.model('Menu');
export function setUpConnection(){
    mongoose.connect('mongodb://localhost/menu')
}

export function ListMenu(){
    return Menu.find()
}

export function createMenu(data) {
    const menu = new Menu({
        title: data.title,
        titlePage: data.titlePage,
        url: data.url,
        createdAt: new Date()
    });

    return menu.save();
}