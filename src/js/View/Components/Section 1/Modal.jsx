import React from "react";

const Modal = ({ handleClick }) => {

        return (
            <div id="modal" className="modal-close" >
                <div className="close" onClick={handleClick}></div>
                <div className="modal-window">
                    <form action="php/mail.php" method="post" className="modal-callback">
                        <textarea className="modal-name" type="text" name="name" placeholder="YOUR NAME" required></textarea>
                        <textarea className="modal-mail" type="text" name="email" placeholder="YOUR MAIL" required></textarea>
                        <textarea className="modal-message" type="text" name="message" placeholder="YOUR MESSAGE" required></textarea>
                        <button type="submit" className="modal-button">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        );

}

export default Modal;

