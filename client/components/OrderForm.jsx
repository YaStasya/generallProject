import React from 'react';

export default class OrderEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            order: {
                email           : '',
                id_film         : '',
                name_film       : '',
                date            : '',
                time            : '',
                places          : '',
                row             :''
            }
        };

        this.handleEmailPageChange = this.handleEmailPageChange.bind(this);
        this.handleIdFilmChange = this.handleIdFilmChange.bind(this);
        this.handleNameFilmChange = this.handleNameFilmChange.bind(this);
        this.handleDateFilmChange = this.handleDateFilmChange.bind(this);
        this.handlePlaceFilmChange = this.handlePlaceFilmChange.bind(this);
        this.handleRowFilmChange = this.handleRowFilmChange.bind(this);
        this.handleTimeFilmChange = this.handleTimeFilmChange.bind(this);
        this.handleOrderAdd = this.handleOrderAdd.bind(this);
    }
    handleEmailPageChange(event){
        this.setState({email:event.target.value})
    };
    handleIdFilmChange(event){
        this.setState({id_film:event.target.value})
    };
    handleNameFilmChange(event){
        this.setState({name_film:event.target.value})
    };
    handleDateFilmChange(event){
        if(event == 'Выберите дату' ){
            alert('Выберите дату сеанса')
        } else {
            this.setState({date: event.target.value})
        }
    };
    handleTimeFilmChange(event){
        if(event == 'Выберите время' ){
            alert('Выберите время сеанса')
        } else {
            this.setState({time: event.target.value})
        }
    };
    handlePlaceFilmChange(event){
        this.setState({places:event.target.value})
    };
    handleRowFilmChange(event){
        this.setState({row:event.target.value})
    };
    handleOrderAdd(event){
        console.log(11111)
        const newOrder = {
            email           : this.state.email,
            id_film         : this.props.film.id,
            name_film       : this.props.film.title,
            date            : this.state.date,
            time            : this.state.time,
            places          : this.state.places,
            row             : this.state.row
        };

        this.props.onOrderAdd(newOrder);
        this.setState({email:'',id_film:'',name_film:'',date:'',time:'',places:'',row:''});
    };

    render(){
         return (
             <div>
                 <img src="/img/zal.jpg"/>
                <div className="OrderEditor">
                    <input
                        type="text"
                        className="OrderEditor_title"
                        value={this.state.email}
                        onChange={this.handleEmailPageChange}
                        placeholder ="Email"
                    />
                    <input
                        type="hidden"
                        className="OrderEditor_titlePage"
                        value={this.state.id_film}
                        onChange={this.handleIdFilmChange}

                    />
                    <input
                        type="hidden"
                        className="OrderEditor_url"
                        value={this.state.name_film}
                        onChange={this.handleNameFilmChange}

                    />
                    <select onChange={this.handleDateFilmChange}>
                        <option>Выберите дату</option>
                        <option name="date" value="07.05.2018">07.05.2018</option>
                        <option name="date" value="08.05.2018">08.05.2018</option>
                        <option name="date" value="09.05.2018">09.05.2018</option>
                        <option name="date" value="10.05.2018">10.05.2018</option>
                        <option name="date" value="11.05.2018">11.05.2018</option>
                    </select>
                    <select onChange={this.handleTimeFilmChange}>
                        <option>Выберите время</option>
                        <option name="time" value="09:45">09:45</option>
                        <option name="time" value="11:15">11:15</option>
                        <option name="time" value="14:40">14:40</option>
                        <option name="time" value="16:15">16:15</option>
                        <option name="time" value="19:30">19:30</option>
                    </select>
                    <input
                        type="text"
                        className="OrderEditor_url"
                        value={this.state.row}
                        onChange={this.handleRowFilmChange}
                        placeholder ="Ряд"
                    />
                    <input
                        type="text"
                        className="OrderEditor_url"
                        value={this.state.places}
                        onChange={this.handlePlaceFilmChange}
                        placeholder ="Места (укажите через ,)"
                    />
                    <div className="OrderEditor_footer">
                        <button
                            className="OrderEditor_button"
                            onClick={this.handleOrderAdd}
                        >Добавить</button>
                    </div>
                </div>
             </div>
        )
    }
}
