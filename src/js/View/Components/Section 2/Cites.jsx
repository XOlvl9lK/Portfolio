import React from "react";
import citesData from "./citesData";

class Cites extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="cites">
                {citesData.map(({ href, imgSrc, imgAlt, index }) => (
                    <a key={imgAlt} href={href}>
                        <img src={imgSrc} alt={imgAlt}/>
                    </a>
                ))}
            </div>
        );
    }
}

export default Cites;