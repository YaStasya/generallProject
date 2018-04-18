import React from 'react';

export default class AllUser extends React.Component {
    render(){
        return (

            <div>
                <nav>
                    <ul>

                        {this.props.user.map(user =>
                            <li><p>{user.userName} - {user.email} -{user.password}</p></li>
                        )
                        }
                    </ul>
                </nav>
            </div>

        )
    }
};