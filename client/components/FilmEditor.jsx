import React from 'react';

export default class FilmEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            film: {
                title       : '',
                decrition   : '',
                urlTitle    : '',
                directedBy  : '',
                country     : '',
                genre       : '',
                roles       : '',
                img         : '',
                time        : ''
            }
        };

        this.handleTitleChangeFilm = this.handleTitleChangeFilm.bind(this);
        this.handleUrlTitleChangeFilm = this.handleUrlTitleChangeFilm.bind(this);
        this.handleGenreChangeFilm = this.handleGenreChangeFilm.bind(this);
        this.handleCountryChangeFilm = this.handleCountryChangeFilm.bind(this);
        this.handleRolesChange = this.handleRolesChange.bind(this);
        this.handleDecritionChange = this.handleDecritionChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleDirectedByChangeFilm = this.handleDirectedByChangeFilm.bind(this);
        this.handleImgChangeFilm = this.handleImgChangeFilm.bind(this);
        this.handleFilmAdd = this.handleFilmAdd.bind(this);
    }
    handleTitleChangeFilm(event){
        this.setState({title:event.target.value})
    };
    handleDirectedByChangeFilm(event){
        this.setState({directedBy:event.target.value})
    };
    handleUrlTitleChangeFilm(event){
        this.setState({urlTitle :event.target.value})
    };
    handleGenreChangeFilm(event){
        this.setState({genre:event.target.value})
    };
    handleCountryChangeFilm(event){
        this.setState({country:event.target.value})
    };
    handleRolesChange(event){
        this.setState({roles:event.target.value})
    };
    handleDecritionChange(event){
        this.setState({decrition:event.target.value})
    };
    handleTimeChange(event){
        this.setState({time:event.target.value})
    };
    handleImgChangeFilm(event){
        this.setState({img:event.target.value})
    };

    handleFilmAdd(event){
        console.log(1111112);
        const newFilm = {
            title       : this.state.title,
            decrition   : this.state.decrition,
            urlTitle    : this.state.urlTitle,
            directedBy  : this.state.directedBy,
            country     : this.state.country,
            genre       : this.state.genre,
            roles       : this.state.roles,
            img         : this.state.img,
            time        : this.state.time
        };

        this.props.onFilmAdd(newFilm);
        this.setState({title:'',decrition:'',urlTitle:'',directedBy:'',country:'',genre:'',roles:'',img:'',time:''});
    };

    render(){
        return (
            <div className="FilmEditor">
                <h4>Добавить фильм</h4>
                <input
                    type="text"
                    className="FilmEditor_title"
                    value={this.state.title}
                    onChange={this.handleTitleChangeFilm}
                    placeholder="Название"
                /><br/>
                <input
                    type="text"
                    className="FilmEditor_urlTitle"
                    value={this.state.urlTitle}
                    onChange={this.handleUrlTitleChangeFilm}
                    placeholder="Ссылка"
                /><br/>
                <input
                    type="text"
                    className="FilmEditor_directedBy"
                    value={this.state.directedBy}
                    onChange={this.handleDirectedByChangeFilm}
                    placeholder="Режиссер"
                /><br/>
                <input
                    type="text"
                    className="FilmEditor_genre"
                    value={this.state.genre}
                    onChange={this.handleGenreChangeFilm}
                    placeholder="Жанр"
                /><br/>
                <input
                type="text"
                className="FilmEditor_country"
                value={this.state.country}
                onChange={this.handleCountryChangeFilm}
                placeholder="Страна"
                /><br/>
                <textarea
                    placeholder='В ролях'
                    rows={5}
                    className='FilmEditor__roles'
                    value={this.state.roles}
                    onChange={this.handleRolesChange}
                /><br/>
                <textarea
                    placeholder='Описание'
                    rows={5}
                    className='FilmEditor__decrition'
                    value={this.state.decrition}
                    onChange={this.handleDecritionChange}
                /><br/>
                <textarea
                    placeholder='Сеансы'
                    rows={5}
                    className='FilmEditor__time'
                    value={this.state.time}
                    onChange={this.handleTimeChange}
                /><br/>
                <input
                    type="text"
                    className="FilmEditor_img"
                    value={this.state.img}
                    onChange={this.handleImgChangeFilm}
                    placeholder="Изображение"
                />

                <div class="FilmEditor_footer">
                    <button className="FilmEditor_button" onClick={this.handleFilmAdd}>Добавить</button>
                </div>
            </div>
        )
    }
}
