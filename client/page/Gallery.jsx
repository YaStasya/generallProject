import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

const IMAGES =
    [
        {
            src: "/img/img1.jpg",
            thumbnail: "/img/img1.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            IsSelected:false,
        },

        {
            src: "/img/img2.jpg",
            thumbnail: "/img/img2.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
        },

        {
            src: "/img/img3.jpg",
            thumbnail: "/img/img3.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },

        {
            src: "/img/img4.jpg",
            thumbnail: "/img/img4.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
        },

        {
            src: "/img/img5.jpeg",
            thumbnail: "/img/img5.jpeg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },

        {
            src: "/img/img6.jpg",
            thumbnail: "/img/img6.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },

        {
            src: "/img/img7.jpg",
            thumbnail: "/img/img7.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
        },

        {
            src: "/img/img8.jpg",
            thumbnail: "/img/img8.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        }
    ]
export default class UserHistory extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="container">
                <h1>Галерея</h1>
                <Gallery images={IMAGES}/>
            </div>
        )
    }

}