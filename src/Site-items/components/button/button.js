import React from "react";
import './button.scss';

const Button = (props) => {
  return(
      <div>
          <a href={props.Href || '#'} className={props.classN} onSubmit={props.onSubmit}>
              {props.children}
          </a>
      </div>

  )
}

export default Button;