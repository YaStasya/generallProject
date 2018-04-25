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
        this.ShowMenu = this.ShowMenu.bind(this);
        this.state = getStateFromFlux();
    }
    componentWillMount() {
        MenuAction.loadMenu();
        this.setState({display:'none'})
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
    ShowMenu() {
        if(this.state.display == 'block'){
            this.setState({display:'none'})
        } else {
            this.setState({display:'block'})
        }
    };
    render(){
        var style={display:this.state.display}
        return (
            <div>
                <div className="App">
                    <div className="customMenu">
                        <MenuGrid menu={this.state.menu}/>
                    </div>
                    <div className="customMenuMob">
                        <i className="fa fa-reorder" onClick={this.ShowMenu}></i>
                        <div  style = {style}>
                            <MenuGrid menu={this.state.menu}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    _onChange(){
        this.setState(getStateFromFlux());
    }
};

//export default AppMenu;