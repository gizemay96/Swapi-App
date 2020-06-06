import React from 'react';
import './ListItemDetailCard.css';

import Card from '../Card/Card';
import Button from '../Button/Button';
import Text from '../Text/Text';
import Image from '../Image/Image';

const ListItemDetailCard = ({ title,infoKeys,info, buttonText, onButtonClick, imgSrc, imgAlt, children }) => {
    return (
      <Card DetailCard rounded shadow>
        <div className="detail-card-img">
          {
            imgSrc ? (
              <>
                <Image src={imgSrc} alt={imgAlt} avatar/>
              </>
            ): 
            children
          }
        </div>
  
        <div className="detail-card-content">
           
        <Text title>{title}</Text>
                {
                
                 infoKeys.map((val,key) => (
                  <Text type="info" key={key}>
                    <span>{val}:</span>
                    {info[val]}
                    </Text>
                ))
                
                }
               
           
        </div>
  
        <div className="detail-card-actions">
          <Button onClick={onButtonClick} color="yellow">{buttonText}</Button>
        </div>
      </Card>
    )
  }
  
  export default ListItemDetailCard;