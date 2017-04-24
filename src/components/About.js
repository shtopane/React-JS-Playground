import React from "react";
import "../sass/About.scss";

export default class About extends React.Component{
    render(){
        return(
            <div class="row about-wrapper">
                <div class="image col-md-4"></div>
                <div class="col-md-8 text-wrapper">
                    <h4>Flex is very useless site for educational purposes</h4>
                    <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum commodi nulla, nobis non provident dolores eaque quaerat sunt quam, nam nostrum consectetur a quae tempora recusandae numquam doloremque eos explicabo. consectetur adipisicing elit. Eligendi voluptatem cum dolorem quisquam iure ullam fugit corporis nulla, quidem, consequatur sint tenetur. Harum quibusdam voluptatem at cumque magnam dolor, culpa!</p>   
                    <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fugit in magni mollitia dolorum iste commodi, repudiandae possimus laboriosam consectetur! Perspiciatis incidunt quaerat nulla consequuntur, minima fugit vitae voluptatem aut! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates a provident, aspernatur suscipit error inventore voluptatem quibusdam, aperiam, beatae facere saepe possimus adipisci nam molestiae similique voluptatum libero facilis voluptas!</small>
                </div>
            </div>
        );
    }
}