import React from "react";

class Contact extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contact">
                <div className="contact-wrap wrap">
                    <h1 className="contact-title">CONTACT US</h1>
                    <h2 className="contact-desc">Oh how lovely that you want to talk with me, because I want to talk with you too! XOXO</h2>
                        <form action="php/mail.php" method="post" className="callback" >
                            <textarea className="name" type="text" name="name" placeholder="YOUR NAME"></textarea>
                            <textarea className="mail" type="text" name="email" placeholder="YOUR MAIL"></textarea>
                            <textarea className="message" type="text" name="message" placeholder="YOUR MESSAGE"></textarea>
                        </form>
                    <button type="submit" className="send-message">SEND MESSAGE</button>
                </div>
            </div>
        );
    }
}

export default Contact;