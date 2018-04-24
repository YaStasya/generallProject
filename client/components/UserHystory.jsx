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
                <div className="AppUserHystory">
                    <h2>История бронирования</h2>
                    <table>
                        <thead>
                        <tr>
                            <td>Название фильма</td>
                            <td>Время сеанса</td>
                            <td>Ряд</td>
                            <td>Место</td>
                        </tr>
                        </thead>
                    <tbody>
                    {this.state.order.map(order =>
                        <tr>
                            <td>{order.name_film}</td>
                            <td>{order.date} {order.time}</td>
                            <td>{order.row}</td>
                            <td>{order.places}</td>
                        </tr>
                    )
                    }
                    </tbody>
                    </table>
                </div>
            )


    }
    _onChange(){
        this.setState(getStateFromFlux());
    }
};