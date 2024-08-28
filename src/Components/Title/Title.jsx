import React from 'react';
import './Title.css';

const Title = ({head, short}) => {
  return (
    <div className='common-title'>
        <div className="head">
            <h1>{head}</h1>
        </div>
        <div className="short">
            <p>{short}</p>
        </div>
    </div>
  )
}

export default Title