'use client'
import React from 'react';
import './anotherSlider.css'

const ImageSlider: React.FC = () => {

    const logos = ['/bin-sadiq-group.png','/association.png','/heritage.png','/law-association.png','/foundation.png','/law-association.png','/law-association.png']
  return (
    <div className="image-slider ">
      <div className="image-slider-track">

        <div className="slide">
        <img src="/bin-sadiq-group.png" alt="" className='w-[56px] h-[56px] md:w-[159px] md:h-[159px]'/>
        </div>
        <div className="slide">
          <img src="/association.png" alt="" className='w-[56px] h-[56px] md:w-[159px] md:h-[159px]'/>
        </div>
        <div className="slide">
         <img src="/heritage.png" alt="" className='w-[65px] h-[56px] md:w-[183px] md:h-[159px]'/>
        </div>
        <div className="slide">
        <img src="/law-association.png" alt="" className='w-[60px] h-[56px] md:w-[171px] md:h-[159px]'/>
        </div>
        <div className="slide">
        <img src="/foundation.png" alt="" className='w-[32px] h-[58px] md:w-[89px] md:h-[159px]'/>
        </div>
        <div className="slide">
        <img src="/bin-sadiq-group.png" alt="" className='w-[56px] h-[56px] md:w-[159px] md:h-[159px]'/>
        </div>
        <div className="slide">
          <img src="/association.png" alt="" className='w-[56px] h-[56px] md:w-[159px] md:h-[159px]'/>
        </div>
        <div className="slide">
         <img src="/heritage.png" alt="" className='w-[65px] h-[56px] md:w-[183px] md:h-[159px]'/>
        </div>  
        <div className="slide">
        <img src="/law-association.png" alt="" className='w-[60px] h-[56px] md:w-[171px] md:h-[159px]'/>
        </div>
        <div className="slide">
        <img src="/foundation.png" alt="" className='w-[32px] h-[58px] md:w-[89px] md:h-[159px]'/>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
