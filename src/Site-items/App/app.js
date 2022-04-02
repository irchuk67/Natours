import React, {Component} from "react";
import Header from "../parts/Header/header";
import './app.scss'
import Grid from "../components/grid-tester/grid";
import About from "../About/about";
import Function from "../parts/Functions/function";
import Tours from "../parts/Tours/tours";
import Stories from "../parts/Stories/stories";

export default class App extends Component{
    render() {
        return(
            <div>
                <Header/>
                <main>
                    <About/>
                    <Function/>
                    <Tours/>
                    <Stories/>
                </main>
            </div>
        )
    }
}