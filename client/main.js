import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/AppMenu.jsx';
import Film from './components/AppFilm.jsx';
import Auth from './components/AppUser.jsx';


ReactDOM.render(
    <div>
        <div id="header">
            <div className="container">
                <div className="logoHeader col-md-2 col-xs-6">
                    <img src="/img/logoPr.png" alt=""/>
                </div>
                <div id="custommenu" className="col-md-9 col-xs-12">
                    <div id="menu">
                        <App/>
                    </div>
                </div>
                <div id="user" className="col-md-1 col-xs-12">
                <Auth/>
                </div>
            </div>
        </div>
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
    </div>,
    document.getElementById('wrapper')
)