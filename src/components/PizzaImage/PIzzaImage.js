import React from 'react';
import classes from './PizzaImage.module.css';

import PizzaImage from '../../assets/スクリーンショット 2020-04-25 10.58.49.png';

const pizzaImage = (props) => {
  <div className={classes.PizzaImage}>
    <img src={PizzaImage} className={classes.PizzaImg} />
  </div>
}

export default pizzaImage;