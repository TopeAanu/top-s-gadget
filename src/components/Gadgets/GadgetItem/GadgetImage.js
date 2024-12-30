import React from 'react';
import iPhone16 from '../../../assets/iPhone16.png';
import Samsung24 from '../../../assets/samsung24.png';
import Redmi12 from '../../../assets/redmi12.png';
import Camon19 from '../../../assets/camon19.png';
import classes from './GadgetItem.module.css';

const GadgetImage = ({ id, alt }) => {
  let imageSrc;

  // Determine which image to use based on the ID
  switch (id) {
    case 'g1':
      imageSrc = iPhone16;
      break;
    case 'g2':
      imageSrc = Samsung24;
      break;
    case 'g3':
      imageSrc = Redmi12;
      break;
    case 'g4':
      imageSrc = Camon19;
      break;
    default:
      imageSrc = null; // No image for other IDs
  }

  return imageSrc ? <img src={imageSrc} alt={alt} className={classes.image} /> : null; // Apply the class here
};

export default GadgetImage;