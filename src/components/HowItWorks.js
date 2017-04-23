import React from "react";
import "../sass/HowItWorks.scss";

export default class HowItWorks extends React.Component{
    render(){
        return(
            <div class="main-background">
                <div class="secondary-background">
                             
                </div>
                <div className="content">
                        <p>Read below to see how it works! Cheap & Quick.</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo corrupti voluptas corporis, harum numquam porro incidunt earum in sequi recusandae. Doloribus facilis ut, impedit accusantium quibusdam nisi a officia ipsa.</span>
                        <div class="btn-wrapper">
                            <button class="rounded-btn">Get Started Today</button>
                        </div>
                </div> 
            </div>
        );
    }
}