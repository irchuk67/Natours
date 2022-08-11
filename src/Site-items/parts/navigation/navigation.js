import React, {useState} from "react";
import './navigation.scss';

const Navigation = () =>{
    const [visible, setVisible] = useState(false);
    const [checked, setChecked] = useState(false);


    const onClickA = () => {
      setVisible(!visible);
      setChecked(!checked)
    }

    const onMenuClick = () => {
      setChecked(!checked);
      setVisible(!visible)

    }

    let mainClassName = 'navigation';
    if(!visible){
        mainClassName += ' hidden'
    }else {
        mainClassName = mainClassName.slice(0, 10)
    }

    let checkboxClassName = 'navigation__checkbox';
    if(checked){
        checkboxClassName += '--checked'
    }else {
        checkboxClassName = checkboxClassName.slice(0, 20)
    }
   return(
       <div className={mainClassName}>
           <input type="checkbox" className={checkboxClassName} onClick={onMenuClick} id={'navi-toggle'}/>
           <label htmlFor={'navi-toggle'} className="navigation__button">
               <span className="navigation__icon">&nbsp;</span>
           </label>

           <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <a type={'submit'} href="#section-about" className="navigation__link" onClick={onClickA}><span>01</span>About Natours</a>
                    </li>
                    <li className="navigation__item"><a href="#section-functions" className="navigation__link" onClick={onClickA}><span>02</span>Your benefits</a></li>
                    <li className="navigation__item"><a href="#section-tours" className="navigation__link" onClick={onClickA}><span>03</span>Popular tours</a></li>
                    <li className="navigation__item"><a href="#section-stories" className="navigation__link" onClick={onClickA}><span>04</span>Stories</a></li>
                    <li className="navigation__item"><a href="#section-book" className="navigation__link" onClick={onClickA}><span>05</span>Book now</a></li>
                </ul>
            </nav>
       </div>
   )
}

export default Navigation;