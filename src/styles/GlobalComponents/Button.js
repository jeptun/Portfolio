import React from 'react'

import { ButtonBack, ButtonFront } from './index'

const Button = (props) => (
  <ButtonBack alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonBack>
);

export default Button
