import React, {useState} from "react";
import './card.scss';

const Card = ({imageSource, cardHeader, text}) => {

    return(
        <div className={'cards'}>
            {imageSource}
            <h3 className={'heading-tertiary u-margin-bottom-small'}>{cardHeader}</h3>
            <p className={'cards__text'}>
                {text}
            </p>
        </div>
    )
}

export default Card;