import mongoose from 'mongoose';
import '../models/Film';

const Film = mongoose.model('Film');
export function setUpConnection(){
    mongoose.connect('mongodb://localhost/film')
}

export function ListFilm(){
    return Film.find()
}

export function createFilm(data) {
    const menu = new Film({
        title       : data.title,
        decrition   : data.decrition,
        urlTitle    : data.urlTitle,
        directedBy  : data.directedBy,
        country     : data.country,
        genre       : data.genre,
        roles       : data.roles,
        img         : data.img,
        time        : data.time,
        createdAt   : new Date()
    });

    return menu.save();
}

export function deleteFilm(id) {
    return Film.findById(id).remove();
}