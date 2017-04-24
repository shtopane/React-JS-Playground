import React from "react";
import axios from "axios";
export default class Footer extends React.Component {
    render() {
        let bgStyle = {
            backgroundColor: "rgb(58, 77, 96)"
        }
        return (
            <div class="one-colour-bg" style={bgStyle}>
                <div class="row">
                   Footer
                </div>
            </div>
        );
    }
}