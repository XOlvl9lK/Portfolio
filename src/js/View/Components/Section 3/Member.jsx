import React from "react";

class Member extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        const { imgURL, name, description} = this.props;

        const descRender = description.map((desc, index) => <li key={index}>{desc}</li>);

        return(
            <figure>
                <img src={imgURL} alt={name}/>
                <figcaption>
                    {name}
                    <ul>
                        {descRender}
                    </ul>
                </figcaption>
            </figure>
        );
    }
}

export default Member;