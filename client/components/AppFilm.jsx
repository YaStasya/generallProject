import React from 'react';

import FilmAction from '../actions/FilmAction.js';
import FilmStore from '../stores/FilmStores.js';

import FilmEditor from './FilmEditor.jsx';
import FilmGrid from './FilmGrid.jsx';
import { BrowserRouter } from 'react-router-dom';

function getStateFromFlux(){
    return {
        isLoading: FilmStore.isLoading(),
        film: FilmStore.getFilm()
    }
}


export default class AppFilm extends React.Component {
    constructor(props) {
        super(props);

        this._onChange = this._onChange.bind(this);
        this.state = getStateFromFlux();
    }
    /* getInitialState(){
         return getStateFromFlux();
     };*/
    componentWillMount() {
        FilmAction.loadFilm();
    };

    componentDidMount() {
        FilmStore.addChangeListener(this._onChange);
    };

    componentWillUnmount() {
        FilmStore.removeChangeListener(this._onChange);
    };
    handleFilmDelete(film) {
        FilmAction.deleteFilm(film.id);
    };

    handleFilmAdd(data) {
        FilmAction.createFilm(data);
    };
    /*<FilmEditor onFilmAdd={this.handleFilmAdd} />*/

    render(){
        return (
            <div className="App">

                <FilmGrid film={this.state.film}  onFilmDelete={this.handleFilmDelete} />
            </div>
        )
    }

    _onChange(){
        this.setState(getStateFromFlux());
    }
};
