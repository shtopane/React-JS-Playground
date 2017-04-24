import React from "react";
import "../sass/AuthorInfo.scss";

export default class AuthorInfo extends React.Component {
    render() {
        return (
            <div class="full-bg">
                <div class="wrapper">
                    <button class="rounded-btn">Photography</button>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                    <div class="row">
                        <div class="rounded-img col-md-1"></div>
                        <p class="col-md-11">Author name. Totally awesome.</p>
                    </div>

                </div>

            </div>
        );
    }
}