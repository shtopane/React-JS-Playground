import React from "react";
import "../sass/NavBar.scss";

export default class NavBar extends React.Component{
    render(){
        return (
            <nav class="navbar navbar-toggleable-md navbar-light sticky-top">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand logo" href="#"><strong>flex</strong> sample website</a>

                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav justify-content-end">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">How it works</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">FAQ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <div class="form-group search-wrapper">
                            <input id="search" class="form-control mr-sm-2" placeholder="Search" type="text" />
                            <a href="#"><span class="fa fa-search search-icon"></span></a>
                        </div>
                    </form>
                </div>
            </nav>
        );
    }
}