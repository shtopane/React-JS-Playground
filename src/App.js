import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./sass/App.scss";

export default class App extends React.Component {
    render() {
        return (
            <div class="container-fluid">
                <NavBar />
                <div  class="content-wrapper">
                    <h1>Useless website to show that i understand React</h1>
                    <button>Get Started Today</button>
                    <p>Some text</p>
                </div>  
            </div>
        );
    }
}