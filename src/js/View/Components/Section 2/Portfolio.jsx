import React from "react";
import Cites from "./Cites.jsx";
import citesData from "./citesData";


class Portfolio extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            clientWidth: document.documentElement.clientWidth
        }
    }

    render() {
        return (
            <div className="portfolio">
                <div className="portfolio-wrap wrap">
                    <p className="title">FANCY DESIGN WORK</p>
                    <p className="desc">and by fancy I mean well thought out and perfectly executed</p>
                    {this.state.clientWidth > 720 ?
                        <>
                            <div className="slide" data-anchor="slide1">
                                <div className="crutch">
                                    <Cites citesData={citesData}/>
                                </div>
                            </div>
                            <div className="slide" data-anchor="slide2">
                                <div className="crutch">
                                    <Cites citesData={citesData}/>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="crutch">
                                <Cites citesData={citesData}/>
                                <Cites citesData={citesData}/>
                            </div>
                        </>
                    }
                </div>
            </div>
        );
    }
}

export default Portfolio;