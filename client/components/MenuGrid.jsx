import React from 'react';
import { Link, Route } from 'react-router-dom';

export default class MenuGrid extends React.Component {
    render(){
        return (
            <div>
                <nav>
                    <ul>
                        {this.props.menu.map(menu =>
                            <li><Link to={menu.url}>{menu.title}</Link></li>
                        )
                        }
                    </ul>
                </nav>
                <div>
                    {this.props.menu.map(menu =>
                        <Route path={menu.url} component=''/>
                    )
                    }
                </div>
            </div>

        )
    }
};