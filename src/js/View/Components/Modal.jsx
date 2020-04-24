import React from "react";

class Modal extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const modal = document.getElementById('wrapper');
        modal.className = "modal-close";
        this.props.modalVisibleChange();
    }

    render() {
        return (
            <div id="wrapper" className="off" >
                <div className="close" onClick={this.handleClick}></div>
                <div className="modal-window">
                    <form action="/php/mail.php" method="post" className="modal-callback">
                        <textarea className="modal-name" type="text" name="name" placeholder="YOUR NAME" required></textarea>
                        <textarea className="modal-mail" type="text" name="email" placeholder="YOUR MAIL" required></textarea>
                        <textarea className="modal-message" type="text" name="message" placeholder="YOUR MESSAGE" required></textarea>
                        <button type="submit" className="modal-button">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Modal;