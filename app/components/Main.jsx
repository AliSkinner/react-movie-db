import React from 'react';

const Main = (props) => {
  return (
    <div>
      <div className='container'>
        {props.children}
        hi
      </div>
    </div>
  );
};

export default Main;
