import React from 'react';

import OrderAction from '../actions/OrderAction.js';
import OrderStore from '../stores/OrderStores.js';

import OrderForm from './OrderForm.jsx';

function getStateFromFlux(){
    return {
        isLoading: OrderStore.isLoading(),
        order: OrderStore.getOrder()
    }
}


export default class AppOrder extends React.Component {
    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = getStateFromFlux();
    }


    componentDidMount() {
        OrderStore.addChangeListener(this._onChange);
    };

    componentWillUnmount() {
        OrderStore.removeChangeListener(this._onChange);
    };
    handleOrderAdd(data) {
        OrderAction.createOrder(data);
    };
/*<OrderGrid order={this.state.order} />*/
    render(){
        var style={ display: this.props.displayBlock };
        return (
            <div className="App" style={style}>
                <OrderForm film={this.props.film} onOrderAdd={this.handleOrderAdd} />
            </div>
        )
    }

    _onChange(){
        this.setState(getStateFromFlux());
    }
};
