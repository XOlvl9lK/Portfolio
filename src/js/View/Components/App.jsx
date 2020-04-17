import ReactDOM from 'react-dom'
import React from 'react'
import s from './App.module.css'
import ReactFullpage from '@fullpage/react-fullpage';
import Header from "./Header.jsx";
import MainPage from "./MainPage.jsx";
import Portfolio from "./Portfolio.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";


const App = () => (
    <div className="container">
        <Header/>
        <ReactFullpage
            licenseKey = {'5ED433DC-CFEE4F98-9A469C6E-EA7EC6CF'}
            scrollingSpeed = {1000}
            // loopTop = {'true'}
            // loopBottom = {'true'}
            // navigation = {'true'}
            scrollOverflow = {'true'}


            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div>
                            <div className="section">
                                <MainPage/>
                            </div>
                            <div className="section page">
                                <div onClick={() => fullpageApi.moveSlideRight()} className="arrow-next"><img src="img/arrow-next-mobile.svg" alt="next"/></div>
                                <div onClick={() => fullpageApi.moveSlideLeft()} className="arrow-prev"><img src="img/arrow-prev-mobile.svg" alt="next"/></div>
                                <Portfolio/>
                            </div>
                            <div className="section dermo">
                                <About/>
                            </div>
                            <div className="section">
                                <Contact/>
                            </div>
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    </div>
);

export default App;