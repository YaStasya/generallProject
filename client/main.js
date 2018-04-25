import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/AppMenu.jsx';
import Auth from './components/AppUser.jsx';
import { HashRouter, Route } from 'react-router-dom';
import Main from './page/Main.jsx';
import About from './page/About.jsx';
import Gallery from './page/Gallery.jsx';
import News from './page/News.jsx';
import Contacts from './page/Contacts.jsx';
import UserArea from './components/UserArea.jsx';
import FilmList from './components/FilmList.jsx';
import Registration from './components/Registration.jsx';


ReactDOM.render(
    <div>
        <HashRouter>
            <div>
            <div id="header">
                <div className="container">
                    <div className="logoHeader col-md-2 col-sm-4 col-xs-8">
                        <img src="/img/logoPr.png" alt=""/>
                    </div>
                    <div id="custommenu" className="col-md-9 col-sm-6 col-xs-2">
                        <div id="menu">
                            <App/>
                        </div>
                    </div>
                    <div id="user" className="col-md-1 col-sm-2 col-xs-2">
                    <Auth/>
                    </div>
                </div>
            </div>
            <div>
                <Route exact path="/" component={Main}/>
                <Route path="/about" component={About}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/news" component={News}/>
                <Route path="/contacts" component={Contacts}/>
                <Route path="/profile" component={UserArea}/>
                <Route path="/films" component={FilmList}/>
                <Route path="/registration" component={Registration}/>

            </div>
            </div>
        </HashRouter>
    </div>,
    document.getElementById('wrapper')
)