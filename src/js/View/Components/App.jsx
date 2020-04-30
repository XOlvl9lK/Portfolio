import ReactDOM from 'react-dom'
import React from 'react'
import s from './App.module.css'
import ReactFullpage from '@fullpage/react-fullpage';
import "script-loader!../../../../scrolloverflow.min.js"

import Header from "./Header/Header.jsx";
import MainPage from "./Section 1/MainPage.jsx";
import Portfolio from "./Section 2/Portfolio.jsx";
import About from "./Section 3/About.jsx";
import Contact from "./Section 4/Contact.jsx";
import Navigation from "./Navigation/Navigation.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalVisible: false,
        }

        this.modalVisibleChange = this.modalVisibleChange.bind(this);
        this.scrollOff = this.scrollOff.bind(this);
    }

    modalVisibleChange() {
        this.setState(prevState => {
            return {
                isModalVisible: !prevState.isModalVisible
            }
        });
    }

    scrollOff(index, nextIndex, direction) {
        return !this.state.isModalVisible;
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <Navigation/>
                <ReactFullpage
                    licenseKey={'5ED433DC-CFEE4F98-9A469C6E-EA7EC6CF'}
                    scrollingSpeed={900}
                    scrollOverflow={'true'}
                    onLeave={this.scrollOff}

                    render={({state, fullpageApi}) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <div>
                                    <div className="section" data-anchor="section-1">
                                        <MainPage modalVisibleChange={this.modalVisibleChange} isModalVisible={this.state.isModalVisible}/>
                                    </div>
                                    <div className="section" data-anchor="section-2">
                                        <div onClick={() => fullpageApi.moveSlideRight()} className="arrow-next"><img
                                            src="img/arrow-next-mobile.svg" alt="next"/></div>
                                        <div onClick={() => fullpageApi.moveSlideLeft()} className="arrow-prev"><img
                                            src="img/arrow-prev-mobile.svg" alt="next"/></div>
                                        <Portfolio/>
                                    </div>
                                    <div className="section top" data-anchor="section-3">
                                        <About/>
                                    </div>
                                    <div className="section" data-anchor="section-4">
                                        <Contact/>
                                    </div>
                                </div>
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />
            </div>
        );
    }
}

export default App;