import React from "react";
import Modal from "./Modal.jsx";

class MainPage extends React.Component{
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const modal = document.getElementById('wrapper');
        modal.className = "modal-open";
        this.props.modalVisibleChange();
    }

    render() {

        return (
            <div className="mainPage">
                <Modal modalVisibleChange={this.props.modalVisibleChange} isModalVisible={this.props.isModalVisible}/>
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