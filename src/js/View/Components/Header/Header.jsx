import React from "react";

class Header extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <div className="header-wrap wrap">
                    <div className="logo">
                        <a href="https://vk.com/id210596232"><img src="img/logo-mobile.svg" alt=""/></a>
                    </div>
                    <div className="insta">
                        <a href="#"><img src="img/insta-mobile.svg" alt=""/></a>
                    </div>
                    <div className="telegram">
                        <a href="#"><img src="img/telegram-mobile.svg" alt=""/></a>
                    </div>
                    <div className="vk">
                        <a href="#"><img src="img/vk-mobile.svg" alt=""/></a>
                    </div>
                </div>
            </div>
        );
    }

}

export default Header;