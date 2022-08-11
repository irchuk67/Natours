import React, {Component} from "react";
import './function.scss';
import Card from "../../components/Card-type1/card";


class Function extends Component {

    render() {
        return(
            <section className={'section-function'} id={'section-functions'}>
                <div className="row section-function__cards">
                    <div className="col-1-of-4">
                        <Card imageSource={<i className="cards__img bi bi-signpost-split" style={{width: 15}}></i>}
                              cardHeader={'Explore the world'}
                              text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nam neque nesciunt obcaecati officiis perferendis sint ut.'}/>
                    </div>
                    <div className="col-1-of-4">
                        <Card imageSource={<i className="cards__img bi bi-compass"></i>}
                              cardHeader={'Meet nature'}
                              text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur corporis distinctio explicabo fugiat.'}
                        />
                    </div>
                    <div className="col-1-of-4">
                        <Card imageSource={<i className="cards__img bi bi-map"></i>}
                              cardHeader={'Explore the world'}
                              text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, aut cum eius est expedita fugit id libero magnam.'}/>
                    </div>
                    <div className="col-1-of-4">
                        <Card imageSource={<i className={'cards__img bi bi-suit-heart'}/>}
                              cardHeader={'Explore the world'}
                              text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus iure maxime modi, nobis placeat quaerat ratione? '}
                        />
                    </div>
                </div>
            </section>
        )
    }


}

export default Function;