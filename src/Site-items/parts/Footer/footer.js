import React from "react";
import "./footer.scss";
import logoLarge from '../../../starter/img/logo-green-2x.png';
import logoSmall from '../../../starter/img/logo-green-1x.png';
import logoGreenSmall from '../../../starter/img/logo-green-small-1x.png'
import logoGreenLarge from '../../../starter/img/logo-green-small-2x.png'

const Footer = () => {
    return(
        <footer className={'footer'}>
            <div className="footer__logo-box u-margin-bottom-large">
                <picture className={'footer__logo'}>
                    <source srcSet={`${logoGreenSmall} 1x, ${logoGreenLarge} 2x`} media={'(max-width: 37.5rem)'}/>
                    <img srcSet={`${logoSmall} 1x, ${logoLarge} 2x`} alt="Full logo" className={'footer__logo'}/>
                </picture>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__nav">
                        <ul className="footer__list">
                            <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Carrers</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Privacy police</a></li>
                            <li className="footer__item"><a href="3" className="footer__link">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Built me <a href="#" className="footer__link">Janas Schmedtmann</a> for his online course <a
                        href="#" className="footer__link">Advanced CSS and SASS</a>. Copyright &copy; by Janas Shmedtmann. You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas Schmedtmann, is of course highly appreciated!
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;