import React from "react";

class Member extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        const { imgURL, name, description} = this.props;

        return(
            <figure>
                <img src={imgURL} alt={name}/>
                <figcaption>
                    {name}
                    <ul>
                        {description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>
                </figcaption>
            </figure>
        );
    }
}

export default Member;