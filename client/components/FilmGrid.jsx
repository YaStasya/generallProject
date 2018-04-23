import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import AppOrder from'./AppOrder.jsx'

export default class FilmGrid extends React.Component {
    constructor(props){
        super(props);
        this.state = {open: false};
        this.state = {displayBlock: 'none'};
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.onShowFrom = this.onShowFrom.bind(this);
    }
    onOpenModal(){
        this.setState({ open: true });
    };

    onCloseModal(){
        this.setState({ open: false });
        this.setState({displayBlock: 'none'});
        console.log(this.state.displayBlock)
    };
    onShowFrom(){
        console.log(this.state.displayBlock)
        if(this.state.displayBlock == 'none') {
            this.setState({displayBlock: 'block'});
        } else {
            this.setState({displayBlock: 'none'});
        }
    };
    render(){
        const { open } = this.state
        return (
            <div className="filList">
                <nav>
                    <ul>
                        {
                            this.props.film.map(film =>

                                <li>
                                    <div class="box">
                                        <img src={film.img} alt={film.title}/>
                                        <div className="moreAbFilm">
                                            <Modal trigger={<Button>Подробнее</Button>}>
                                                <Modal.Header>{film.title}</Modal.Header>
                                                <Modal.Content image>
                                                    <Modal.Description>
                                                        <div className="width">
                                                            <div class="descr">Жанр: <span>{film.genre}</span></div>
                                                            <div class="descr">Режиссер: <span>{film.directedBy}</span></div>
                                                            <div class="descr">Страна: <span>{film.country}</span></div>
                                                            <div class="descr">В ролях: <span>{film.roles}</span></div>
                                                            <div class="descr">Описание: <span>{film.decrition}</span></div>
                                                            <a className="showFormOrder" onClick={this.onShowFrom}>Забронировать билеты</a>
                                                            <AppOrder displayBlock={this.state.displayBlock} film={film}/>
                                                        </div>
                                                    </Modal.Description>
                                                    <Image wrapped size='medium' src={film.img} />
                                                </Modal.Content>
                                            </Modal>
                                        </div>
                                    </div>
                                </li>

                            )
                        }
                    </ul>
                </nav>

            </div>

        )
    }
};