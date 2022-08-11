import React from "react";
import './rotating-card.scss'
import Button from "../button/button";

const RotatingCard = ({imgNumber, heading, cardDetails, color, price}) => {
    const details = cardDetails.map((item)=>{
        return <li key={Math.random()*100}>{item}</li>
    })


    return(
        <div className={'card'}>
            <div className={`card__side--front card__side`}>
                <div className={`card__side--picture card__side--picture--${imgNumber}`}>
                    <span>&nbsp;</span>
                </div>
                <h4 className="card__side__heading">
                    <span className={`card__side__heading-span card__side__heading-span--${imgNumber}`}>
                        {heading}
                    </span>
                </h4>
                <div className={'card__side__details'}>
                    <ul>
                        {details}
                    </ul>
                </div>
            </div>
            <div className={`card__side--back card__side card__side--back-${color}`}>
                <div className="card__side--back-content">
                    <div className="card__side--back-content card__side--back-content_price-box u-margin-bottom-large">
                        <h4 className={'card__side--back-content_price-box-heading'}>
                            Only
                        </h4>
                        <span className={'card__side--back-content_price-box-price'}>
                    ${price}
                    </span>
                    </div>

                    <Button classN={'btn btn--white card__side--back-content-button'} Href={'#popup'}>
                        Book now!
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default RotatingCard;