import React from "react";

class About extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="about">
                <div className="about-wrap wrap">
                    <h1 className="title">U WANNA KNOW BOUT LITTLE OLE' US?</h1>
                    <h2 className="desc">Alrighty I'll tell you, but just know that you're making me blush.</h2>
                    <div className="photo">
                        <figure>
                            <img src="img/zhma-she.png" alt="Валерия"/>
                            <figcaption>
                                Жмышенко<br/>Валерия Альбертовна
                                <ul>
                                    <li>
                                        Веб-дизайнер
                                    </li>
                                </ul>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src="img/zhma-he.png" alt="Валерий"/>
                            <figcaption>
                                Жмышенко<br/>Валерия Альбертовна
                                <ul>
                                    <li>
                                        Веб-дизайнер
                                    </li>
                                    <li>
                                        Веб-дизайнер
                                    </li>
                                    <li>
                                        Веб-дизайнер
                                    </li>
                                </ul>
                            </figcaption>
                        </figure>
                    </div>
                    <h2 className="about-desc">Hello interested party, I assume you want to know a little bit more about me. To start, I’m a designer<br/>
                    and illustrator from beautiful Queens NY, where I live with my wife, two totally adorable kids<br/>and one generally grumpy cat.</h2>
                </div>
            </div>
        );
    }
}

export default About;