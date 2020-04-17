import React from "react";

class MainPage extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mainPage">
                <div className="mainPage-wrap wrap">
                    <div className="slogan">
                        I MAKE AWESOME THINGS,<br/>FOR AWESOME PEOPLE
                    </div>
                        <button className="request">Оставить заявку</button>
                </div>
            </div>
        );
    }

}

export default MainPage;