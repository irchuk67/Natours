import React, {Component} from "react";
import './header.scss';
import logoWhite from '../../../starter/img/logo-white.png'
import Button from "../../components/button/button";

export default class Header extends Component{
    render() {
        return(
            <header className={'header'}>
                <div className={'header__logo-box'}>
                    <img className={'header__logo'} alt={'logo'} src={logoWhite}/>
                </div>
                <div className={'header__text-box'}>
                    <h1 className={'heading-primary'}>
                        <span className={'heading-primary--main'}>Outdoors</span>
                        <span className={'heading-primary--sub'}>is where life happens</span>
                    </h1>
                    <Button classN={'btn btn--white btn--animated'} Href={'#section-tours'}>
                        Discover our tours
                    </Button>
                </div>

            </header>
        )
    }
}