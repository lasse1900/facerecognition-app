import React from 'react';


const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className='center ma'>
      {/* <img src={'https://samples.clarifai.com/face-det.jpg'} alt='' /> */}
      <div className='absolute mt2'>
        <img src={imageUrl} alt='' width='500px' height='auto' />
      </div>
    </div>
  );
}

export default FaceRecognition;