import React from "react";
import personInATour from '../../../starter/img/nat-8.jpg';
import personInATour2 from '../../../starter/img/nat-9.jpg';
import './popup.scss';
import Button from "../../components/button/button";

const Popup = () => {
    return(
        <div className={'popup'} id={'popup'}>
            <div className="popup__content">
                <div className="popup__left">
                    <img src={personInATour} alt="Tour photo" className={'popup__img popup__img--1'}/>
                    <img src={personInATour2} alt={'Tour photo'} className={'popup__img popup__img--2'}/>
                </div>
                <div className="popup__right">
                    <a href={'#section-tours'} className={'popup__close'}>
                        &times;
                    </a>
                    <h2 className={'heading-secondary u-margin-bottom-small'}>Start booking now</h2>
                    <h3 className="heading-tertiary u-margin-bottom-small">important &ndash; please read these terms before booking</h3>
                    <p className="popup__text">
                        Vestibulum leo arcu, semper quis semper ac, efficitur ut massa. Mauris sollicitudin, lacus non scelerisque semper, velit quam dapibus diam, sit amet ullamcorper ante orci sed justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse vel ex scelerisque, pharetra lectus a, vulputate velit. Etiam gravida ultricies hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent varius mauris eu pulvinar faucibus. Donec ac ornare enim. Aliquam euismod tempor ex, at suscipit enim pretium vitae. Curabitur odio leo, blandit eu consequat in, rhoncus at elit. Vivamus rutrum sollicitudin turpis quis semper. Quisque congue euismod felis et gravida. Aliquam ut arcu pharetra, efficitur quam eu, malesuada leo. Maecenas ut finibus est, a auctor metus. Vestibulum scelerisque ac tortor ac tempus.
                    </p>
                    <Button classN={'btn btn--green'}>
                        Book now
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Popup;