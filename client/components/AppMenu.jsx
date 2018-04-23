import React from 'react';

import MenuAction from '../actions/MenuAction.js';
import MenuStore from '../stores/MenuStores.js';

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
            <div>
                <div className="App">
                    <MenuGrid menu={this.state.menu}/>
                </div>
            </div>
        )
    }

    _onChange(){
        this.setState(getStateFromFlux());
    }
};

//export default AppMenu;