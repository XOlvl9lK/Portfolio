import React from "react";
import Cites from "./Cites.jsx";


class Portfolio extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="portfolio">
                <div className="portfolio-wrap wrap">
                    <p className="title">FANCY DESIGN WORK</p>
                    <p className="desc">and by fancy I mean well thought out and perfectly executed</p>
                    <div className="slide" data-anchor="slide1">
                        <div className="crutch">
                            <Cites/>
                        </div>
                    </div>
                    <div className="slide" data-anchor="slide2">
                        <div className="crutch">
                            <Cites/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Portfolio;