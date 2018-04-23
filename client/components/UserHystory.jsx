import OrderStore from "../stores/OrderStores";
import React from "react";
import OrderActions from "../actions/OrderAction";
function getStateFromFlux(){
    return {
        isLoading: OrderStore.isLoading(),
        order: OrderStore.getOrder(),
        //status: OrderStore.getStatus()
    }
}
export default class UserHistory extends React.Component {
    constructor(props) {
        super(props);

        this._onChange = this._onChange.bind(this);
        this.state = getStateFromFlux();
    }
    componentWillMount() {
        OrderActions.loadOrder(this.props.userEmail);
    };

    componentDidMount() {
        OrderStore.addChangeListener(this._onChange);
    };

    componentWillUnmount() {
        OrderStore.removeChangeListener(this._onChange);
    };

    /*<FormRegistr onUserAdd={this.handleUserAdd}/>*/
    render(){
        //if(this.state.status == '200'){
            return (
                <div className="AppUser container">
                    <h2>История бронирования</h2>
                    {this.state.order.map(order =>
                        <div><p>Имя: {order.name_film} - {order.date} {order.time}</p></div>
                    )
                    }
                </div>
            )


    }
    _onChange(){
        this.setState(getStateFromFlux());
    }
};