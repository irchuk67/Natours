import React from "react";
import './stories.scss';
import personInATour from '../../../starter/img/nat-8.jpg';
import personInATour2 from '../../../starter/img/nat-9.jpg';
import Card3 from "../../components/Card-3/card-3";
import videomp4 from '../../../starter/img/video.mp4';
import videowebm from '../../../starter/img/video.webm';
import Button from "../../components/button/button";

const Stories = () => {
  return(
      <section className={'stories'}>
          <div className="bg-video">
              <video className="bg-video__content" autoPlay muted loop>
                 <source src={videomp4} type={'video/mp4'}/>
                 <source src={videowebm} type={'video/webm'}/>
                  Your browser is not supported
              </video>
          </div>
          <h2 className="heading-secondary u-margin-bottom-large">We make people genuinely happy</h2>
          <Card3 personName={'Marry Smith'}
              imgSource={personInATour}
              heading={'I HAD THE BEST WEEK EVER WITH MY FAMILY'}/>
          <Card3 personName={'Jack Wilson'}
              imgSource={personInATour2}
              heading={'WOW! MY LIFE IS COMPLETELY DIFFERENT NOW'}/>
          <Button classN="btn-text">
              Read all stories &rarr;
          </Button>
      </section>

  )
}

export default Stories;