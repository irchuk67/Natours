import React, {Component} from "react";
import Header from "../parts/Header/header";
import './app.scss';
import '../../Site-items/components/grid-tester/grid.scss'
import About from "../parts/About/about";
import Function from "../parts/Functions/function";
import Tours from "../parts/Tours/tours";
import Stories from "../parts/Stories/stories";
import Booking from "../parts/Booking/booking";
import Footer from "../parts/Footer/footer";
import Navigation from "../parts/navigation/navigation";
import Popup from "../parts/Popup/popup";

export default class App extends Component{
    render() {
        return(
            <div>
                <Navigation/>
                <Header/>
                <main>
                    <About/>
                    <Function/>
                    <Tours/>
                    <Stories/>
                    <Booking/>
                </main>
                <Footer/>
                <Popup/>
            </div>
        )
    }
}