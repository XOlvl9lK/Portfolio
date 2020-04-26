import React from "react";
import Modal from "./Modal.jsx";

class MainPage extends React.Component{
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        document.getElementById('modal').classList.toggle("modal-open")
        this.props.modalVisibleChange();
    }

    render() {

        return (
            <div className="mainPage">
                <Modal  handleClick={this.handleClick}/>
                <div className="mainPage-wrap wrap">
                    <div className="slogan">
                        I MAKE AWESOME THINGS,<br/>FOR AWESOME PEOPLE
                    </div>
                    <button className="request" onClick={this.handleClick}>Оставить заявку</button>
                </div>
            </div>
        );
    }

}

export default MainPage;