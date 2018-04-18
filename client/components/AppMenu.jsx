import React from 'react';

import MenuAction from '../actions/MenuAction.js';
import MenuStore from '../stores/MenuStores.js';

import MenuEditor from './MenuEditor.jsx';
import MenuGrid from './MenuGrid.jsx';
import { BrowserRouter } from 'react-router-dom';

function getStateFromFlux(){
    return {
        isLoading: MenuStore.isLoading(),
        menu: MenuStore.getMenu()
    }
}


export default class AppMenu extends React.Component {
    constructor(props) {
        super(props);

        this._onChange = this._onChange.bind(this);
        this.state = getStateFromFlux();
    }
    componentWillMount() {
        MenuAction.loadMenu();
    };

    componentDidMount() {
        MenuStore.addChangeListener(this._onChange);
    };

    componentWillUnmount() {
        MenuStore.removeChangeListener(this._onChange);
    };


    handleMenuAdd(data) {
        MenuAction.createMenu(data);
    };
    render(){
        return (
            <div className="App">
                <BrowserRouter>
                <MenuGrid menu={this.state.menu}/>
                </BrowserRouter>
            </div>
        )
    }

    _onChange(){
        this.setState(getStateFromFlux());
    }
};

//export default AppMenu;