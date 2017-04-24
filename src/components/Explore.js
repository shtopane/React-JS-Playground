import React from "react";
import "../sass/Explore.scss";

export default class Explore extends React.Component {
    render() {
        return (
            <div class="background">
                {/*<div class="background"></div>*/}
                <div class="second-background"></div>
                <div className="content explore-content">
                    <p>Explore Thousands of atoms in the air around you.Now! For Free!</p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo corrupti voluptas corporis, harum numquam porro incidunt earum in sequi recusandae. Doloribus facilis ut, impedit accusantium quibusdam nisi a officia ipsa.</span>
                    <div class="btn-wrapper">
                        <button class="rounded-btn">Get Started Today</button>
                    </div>
                </div>
            </div>
        );
    }
}