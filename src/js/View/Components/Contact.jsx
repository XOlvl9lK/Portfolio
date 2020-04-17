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
                    <form action="">
                        <input type="text" value="YOUR NAME"/>
                        <input type="text" value="YOUR MAIL"/>
                        <input type="text" value="YOUR MESSAGE"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;