import React from 'react';

import MenuAction from '../actions/MenuAction.js';
import MenuStore from '../stores/MenuStores.js';

import Menu from './Menu.jsx';
import MenuEditor from './MenuEditor.jsx';
import MenuGrid from './MenuGrid.jsx';

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
    }
    getInitialState(){
        return getStateFromFlux();
    };
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
                <div className="App_header">AppMenu</div>
                <MenuEditor onMenuAdd={this.handleMenuAdd}/>
                <MenuGrid />
            </div>
        )
    }

    _onChange(){
        this.setState(getStateFromFlux());
    }
};

//export default AppMenu;