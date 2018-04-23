import React from 'react';
import Film from '../components/AppFilm.jsx';

const Main = (props) => (
    <div className="content container">
        <div id="slider">
            <div className="slider">
                <img src="/img/slide1.jpg"/>
            </div>
        </div>
        <div id='mainFilm'>
            <div className="container">
                <Film/>
            </div>
        </div>
     </div>
);

export default Main;
