'use client'
import React from 'react';
import './anotherSlider.css'

const ImageSlider: React.FC = () => {

    const logos = ['/bin-sadiq-group.png','/association.png','/heritage.png','/law-association.png','/foundation.png','/law-association.png','/law-association.png']
  return (
    <div className="image-slider">
      <div className="image-slider-track">
        <div className="slide">
        <img src="/bin-sadiq-group.png" alt="" className='w-[159px] h-[159px]'/>
        </div>
        <div className="slide">
          <img src="/association.png" alt="" className='w-[159px] h-[159px]'/>
        </div>
        <div className="slide">
         <img src="/heritage.png" alt="" className='w-[183px] h-[159px]'/>
        </div>
        <div className="slide">
        <img src="/law-association.png" alt="" className='w-[171px] h-[159px]'/>
        </div>
        <div className="slide">
        <img src="/foundation.png" alt="" className='w-[89px] h-[159px]'/>
        </div>
        <div className="slide">
        <img src="/bin-sadiq-group.png" alt="" className='w-[159px] h-[159px]'/>
        </div>
        <div className="slide">
          <img src="/association.png" alt="" className='w-[159px] h-[159px]'/>
        </div>
        <div className="slide">
         <img src="/heritage.png" alt="" className='w-[183px] h-[159px]'/>
        </div>
        <div className="slide">
        <img src="/law-association.png" alt="" className='w-[171px] h-[159px]'/>
        </div>
        <div className="slide">
        <img src="/foundation.png" alt="" className='w-[89px] h-[159px]'/>
        </div>
        
      </div>
    </div>
  );
};

export default ImageSlider;
