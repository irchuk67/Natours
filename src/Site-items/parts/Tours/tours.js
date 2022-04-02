import React from "react";
import './tours.scss';
import RotatingCard from "../../components/Rotating-card/rotating-card";
import Button from "../../components/button/button";

const Tours = () => {
    return(
        <section className={'tours'}>
            <h2 className="heading-secondary tours__heading u-margin-bottom-large">Most popular tours</h2>
            <div className="row">
                <div className="col-1-of-3">
                    <RotatingCard color={'orange'}
                                  heading={'The sea explorer'}
                                  imgNumber={'1'}
                                  cardDetails={["3 day tours", "Up to 30 people", "2 tour guides", "Sleep in cozy hotel", "Difficulty: easy"]}
                                  price={'297'}
                    />
                </div>
                <div className="col-1-of-3">
                    <RotatingCard color={'green'}
                                  heading={'The forest hiker'}
                                  imgNumber={'2'}
                                  cardDetails={["7 day tours", "Up to 40 people", "6 tour guides", "Sleep in provided tents", "Difficulty: medium"]}
                                  price={'497'}
                    />
                </div>
                <div className="col-1-of-3">
                    <RotatingCard color={'blue'}
                                  heading={'The snow adventure'}
                                  imgNumber={'3'}
                                  cardDetails={["5 day tours", "Up to 15 people", "3 tour guides", "Sleep in provided tents", "Difficulty: hard"]}
                                  price={'897'}                    />
                </div>
            </div>
            <Button classN={'btn btn--green u-margin-top-large'}>
                Discover all tours
            </Button>
        </section>
    )
}

export default Tours;