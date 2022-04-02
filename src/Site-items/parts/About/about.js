import React, {Component} from "react";
import nat1 from '../../starter/img/nat-1-large.jpg';
import nat2 from '../../starter/img/nat-2-large.jpg';
import nat3 from '../../starter/img/nat-3-large.jpg';
import './about.scss'
import Button from "../components/button/button";

export default class About extends Component{
    render() {
        return(
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-large">
                    <h2 className="heading-secondary">
                        Exciting tours for adventure people
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            You`re going to fall in love with nature
                        </h3>
                        <p className={'paragraph'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam animi architecto asperiores aspernatur deleniti, dolorem doloremque ducimus libero molestias mollitia officia perferendis quaerat quidem quos sapiente sint sunt voluptatum.
                        </p>
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Live adventures like you never have before
                        </h3>
                        <p className={'paragraph'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi eveniet, laudantium nesciunt officia qui suscipit? Explicabo labore maiores veniam? Adipisci aspernatur at eaque excepturi impedit ipsa labore nostrum quia quisquam!
                        </p>

                        <Button text={`Learn more &rarr`} classN={'btn-text'}>
                            Learn more
                            &rarr;
                        </Button>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src={nat1} alt="Photo 1" className="composition__photo composition__photo--p1"/>
                            <img src={nat2} alt="Photo 2" className="composition__photo composition__photo--p2"/>
                            <img src={nat3} alt="Photo 3" className="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}