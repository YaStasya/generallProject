import React from 'react';



export default class Film extends React.Component {
    render() {
        return (
            <div className='Film'>
                <span className='Film__del-icon' onClick={this.props.onDelete}> × </span>
                {
                    this.props.title
                        ?
                        <h4 className='Film__title'>{this.props.title}</h4>
                        :
                        null
                }
                <div className='Film__text'>{this.props.children}</div>
            </div>
        );
    }
};
