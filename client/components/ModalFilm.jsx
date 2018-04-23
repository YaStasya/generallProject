var React = require('react');
var $ = require('jquery');

export default class Modal extends React.Component {
    getInitialState() {
        return {
            visible: false,
            cancel_title: this.props.cancel_title ? this.props.cancel_title : 'Отмена',
            action_title: this.props.action_title ? this.props.action_title : 'ОК',
            title: '',
            text: ''
        };
    }
    // Обработчик закрытия модального окна, вызовет обработчик отказа
    close() {
        this.setState({
            visible: false
        }, function () {
            return this.promise.reject();
        });
    }
    // Обработчик действия модального окна, вызовет обработчик действия
    action() {
        this.setState({
            visible: false
        }, function () {
            return this.promise.resolve();
        });
    }

    open(data) {
        this.setState({
            visible: true,
            title       : data.title,
            decrition   : data.decrition,
            urlTitle    : data.urlTitle,
            directedBy  : data.directedBy,
            country     : data.country,
            genre       : data.genre,
            roles       : data.roles,
            img         : data.img,
            time        : data.time
        });

        // promise необходимо обновлять при каждом новом запуске окна
        this.promise = new $.Deferred();
        return this.promise;
    }
    render() {

        var modalClass = this.state.visible ? "modal fade in" : "modal fade";
        var modalStyles = this.state.visible ? {display: "block"} : {};
       /* var backdrop = this.state.visible ? (
            <div className="modal-backdrop fade in" onClick={this.close} />
        ) : null;*/

        var title = this.state.title ? (
            <div className="modal-header">
                <h4 className="modal-title">{this.state.title}</h4>
            </div>
        ) : null;

        return (
            <div className={modalClass} style={modalStyles}>

                <div className="modal-dialog">
                    <div className="modal-content">
                        {title}
                        <div className="modal-body">
                            <p>{this.state.text}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default"
                                    onClick={this.close}>{this.state.cancel_title}</button>
                            <button type="button" className="btn btn-primary"
                                    onClick={this.action}>{this.state.action_title}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

module.exports = Modal;