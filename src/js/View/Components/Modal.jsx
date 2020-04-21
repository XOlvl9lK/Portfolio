import React from "react";

class Modal extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="openModal" className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="medal-header">
                            <h3 className="modal-title">Название</h3>
                            <a href="#close" title="close" className="close">x</a>
                        </div>
                        <div className="modal-body">
                            <p>Содержимое модального окна...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;