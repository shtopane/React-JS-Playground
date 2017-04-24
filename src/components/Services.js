import React from "react";
import "../sass/Services.scss";

export default class Services extends React.Component {
    render() {
        return (
        <div class="row service-container">
            <div class="row upper-articles">
                <div class="col-md-6">
                    <h4>Some Heading</h4>
                    <p>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, commodi, repellat! Ipsa cum culpa adipisci dolorem iusto molestias iste suscipit impedit dolor, beatae odit ea quas, excepturi facere ipsum assumenda. consectetur adipisicing elit. Natus vero repudiandae qui pariatur labore nostrum nihili</p>
                </div>
                <div class="col-md-6">
                    <h4>Another Heading</h4>
                    <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum eius commodi nihil voluptatem maiores saepe obcaecati aspernatur asperiores ducimus tempore, excepturi totam, soluta animi facere pariatur. Nobis, nemo ex cum. consectetur adipisicing elit. Natus vero repudiandae qui pariatur labore nostrum nihili</p>
                </div>    
            </div>
            <div class="row lower-articles">
                <div class="col-md-6">
                    <h4>How it Works</h4>
                    <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum totam quae molestias dignissimos ex, perspiciatis, in quos labore delectus aspernatur ipsum culpa expedita soluta sequi! Quas odit atque nihil fugit! consectetur adipisicing elit. Natus vero repudiandae qui pariatur labore nostrum nihil, om</p>     
                </div>
                <div class="col-md-6">
                    <h4>How it does not work</h4>
                    <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente expedita, excepturi repellendus, vero neque voluptates pariatur iusto temporibus reprehenderit veritatis laborum incidunt molestias? Blanditiis ipsa nam nobis numquam. Ipsam, deserunt. consectetur adipisicing elit. Natus vero repudiandae qui pariatur labore nostrum nihil, om</p>
                </div>
            </div>
            <div class="round rounded-circle"></div>
        </div>
        );
    }
}