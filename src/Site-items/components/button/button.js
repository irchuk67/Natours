import React from "react";
import './button.scss';

const Button = (props) => {
  return(
      <div>
          <a href={'#'} className={props.classN}>
              {props.children}
          </a>
      </div>

  )
}

export default Button;