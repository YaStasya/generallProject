import React from 'react';

export default class FilmGrid extends React.Component {
    render(){
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
                                            <a href={film.urlTitle}>Подробнее</a>
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