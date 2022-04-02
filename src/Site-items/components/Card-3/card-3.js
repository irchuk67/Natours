import React from "react";
import './card-3.scss';

const Card3 = ({heading, imgSource, personName}) => {
    return(
        <div className={'row'}>
            <div className="card3">
                <figure className={'card3__shape'}>
                    <img src={imgSource} alt={'Peron in e tour'} className={'card3__image'}/>
                    <figcaption className={'card3__caption'}>{personName}</figcaption>
                </figure>
                <div className="card3__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">{heading}</h3>
                    <p className={'card3__text'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae quia reiciendis unde velit. Alias assumenda culpa dolorem error et impedit ipsam necessitatibus temporibus unde! Adipisci autem corporis facere vero!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam iure numquam pariatur repellat. Autem deserunt ea ex ipsum libero perferendis, porro quam quas. Asperiores beatae commodi fugit optio temporibus totam.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Card3;
