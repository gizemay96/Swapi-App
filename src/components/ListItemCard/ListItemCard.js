import React from 'react';
import './ListItemCard.css';

import Card from '../Card/Card';
import Button from '../Button/Button';
import Text from '../Text/Text';
import Image from '../Image/Image';

const ListItemCard = ({ title, text, buttonText, onButtonClick, imgSrc, imgAlt, children }) => {
  return (
    <Card itemCard rounded shadow>
      <div className="card-img">
        {
          imgSrc ? (
            <>
              <Image width="100%" fit="cover" src={imgSrc} alt={imgAlt} />
            </>
          ): 
          children
        }
      </div>

      <div className="card-content scroll">
        {
          title  ? 
          (
            <>
              <Text title>{title}</Text>
              <Text>{text}</Text>
            </> 
          ) : 
          
          children
        }
      </div>

      <div className="card-actions">
        <Button onClick={onButtonClick} color="yellow">{buttonText}</Button>
        
      </div>
    </Card>
  )
}

export default ListItemCard;