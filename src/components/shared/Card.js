import React from 'react';

const Card = props => {
  const {cardHeader, children} = props;

  return (<div className="card card-width">
    <div className="card-header">
      {cardHeader}
    </div>
    <div className="card-body">
      {children}
    </div>
  </div>);
}

export default Card;
