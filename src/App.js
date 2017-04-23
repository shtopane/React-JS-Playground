import React from "react";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import "./sass/App.scss";

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
            </div>
           
            
        );
    }
}