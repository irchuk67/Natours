import React from "react";
import './booking.scss'
import Form from "../../components/form/form";

const Booking = () => {
    return(
        <section className={'section-book'} id={'section-book'}>
            <div className="row">
                <div className="book">
                    <Form classN={'book__form'}/>
                </div>
            </div>
        </section>
    )
}
export default Booking;