import React from 'react';
import './Card.css';

const Card = ({ shadow, rounded, children,itemCard,DetailCard }) => {
  const cardClasses= `card ${itemCard ? 'item-card' : ''} ${DetailCard ? 'detail-card' : ''} ${shadow ? 'card-shadow' : ''} ${rounded ? 'card-rounded' : ''}`;

  return (
    <div className={cardClasses}>
      {children}
    </div>
  )
}

export default Card;