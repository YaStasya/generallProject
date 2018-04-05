import React from 'react';

export default class MenuEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                title: '',
                titlePage: '',
                url: ''
            }
        };

        this.handleTitlePageChange = this.handleTitlePageChange.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleMenuAdd = this.handleMenuAdd.bind(this);
    }
    handleTitlePageChange(event){
        this.setState({titlePage:event.target.value})
    };
    handleUrlChange(event){
        this.setState({url:event.target.value})
    };
    handleTitleChange(event){
        this.setState({title:event.target.value})
    };
    handleMenuAdd(event){
       const newMenu = {
           title: this.state.title,
           titlePage: this.state.titlePage,
           url: this.state.url
       };

       this.props.onMenuAdd(newMenu);
       this.setState({title:'',titlePage:'',url:''});
    };

    render(){
        return (
            <div className="MenuEditor">
                <input
                    type="text"
                    className="MenuEditor_title"
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                    />
                    <input
                        type="text"
                        className="MenuEditor_titlePage"
                        value={this.state.titlePage}
                        onChange={this.handleTitlePageChange}
                    />
                    <input
                        type="text"
                        className="MenuEditor_url"
                        value={this.state.url}
                        onChange={this.handleUrlChange}
                    />
                    <div class="MenuEditor_footer">
                        <button
                            className="MenuEditor_button"
                            disabled={!this.state.title}
                            onClick={this.handleMenuAdd}
                        >Добавить</button>
                    </div>
            </div>
        )
    }
}
