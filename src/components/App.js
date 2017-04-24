import React from "react";
import NavBar from "./NavBar";
import Services from "./Services";
import HowItWorks from "./HowItWorks";
import About from "./About";
import Explore from "./Explore";
import InfoPanel from "./InfoPanel";
import AuthorInfo from "./AuthorInfo";
import Contact from "./Contact";
import Footer from "./Footer";
import "../sass/App.scss";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <div class="container-fluid">
                    <NavBar />
                    <div class="content-wrapper">
                        <h1>Useless website to show that i understand React</h1>
                        <button class="rounded-btn">Get Started Today</button>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                    </div>
                </div>
                <Services />
                <HowItWorks />
                <About />
                <Explore />
                <AuthorInfo />
                <InfoPanel />
                <Contact />
                <Footer />
            </div>
           
            
        );
    }
}