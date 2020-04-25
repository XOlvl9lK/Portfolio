import React from "react";

class Cites extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { citesData } = this.props;

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