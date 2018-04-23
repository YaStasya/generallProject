import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/AppMenu.jsx';
import Auth from './components/AppUser.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './page/Main.jsx';
import About from './page/About.jsx';
import Gallery from './page/Gallery.jsx';
import News from './page/News.jsx';
import Contacts from './page/Contacts.jsx';
import UserArea from './components/UserArea.jsx';


ReactDOM.render(
    <div>
        <BrowserRouter>
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
            <div>
                <Route path="/" component={Main}/>
                <Route path="/about" component={About}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/news" component={News}/>
                <Route path="/contacts" component={Contacts}/>
                <Route path="/profile" component={UserArea}/>
                <Route path="/logout" component=""/>
            </div>
            </div>
        </BrowserRouter>
    </div>,
    document.getElementById('wrapper')
)