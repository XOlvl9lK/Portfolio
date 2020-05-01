import React from "react";
import Member from "./Member.jsx";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="about">
                <div className="about-wrap">
                    <div className="about-title">
                        <h1 className="title-header">U WANNA KNOW BOUT LITTLE OLE'&nbsp;US?</h1>
                        <h2 className="title-desc">Alrighty I'll tell you, but just know that you're making me
                            blush.</h2>
                    </div>
                    <div className="photo">
                        <Member imgURL={"img/zhma-she.png"} name={"Жмышенко Валерия Альбертовна"}
                                description={["Веб-дизайнер"]}/>
                        <Member imgURL={"img/zhma-he.png"} name={"Жмышенко Валерий Альбертович"}
                                description={["Веб-дизайнер", "Веб-дизайнер", "Веб-дизайнер"]}/>
                    </div>
                    <h2 className="about-desc">Hello interested party, I assume you want to know a little bit more about
                        me. To start, I’m a designer and illustrator from beautiful Queens NY, where I live with my
                        wife, two totally adorable kids and one generally grumpy cat.</h2>
                </div>
            </div>
        );
    }
}

export default About;