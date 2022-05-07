import React from 'react';
import loading from '../images/loading.gif';

const Loader = () => {
  return (
    <div>
      <img src={ loading } alt='loading...' style={{ display :'flex' , width : '200px', alignItems: 'center' , margin: 'auto'}} />
    </div>
  )
}

export default Loader
