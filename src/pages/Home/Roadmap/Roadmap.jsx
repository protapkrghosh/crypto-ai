import React from 'react';
import "./Roadmap.css"
import Container from '../../../Components/Container';
import ChatIcon  from '../../../assets/Chat.png';
import LayersSharp  from '../../../assets/layers-sharp.png';

const Roadmap = () => {
  return (
    <div className='bg-gradient-to-b from-[#130e33] from-5% via-[#030014] via-50% to-[#1b1542] to-100% -mt-[1px] pt-12 pb-20'>
      <Container>
        <div className='flexMap'>
          <div>
            <h4 className='text-4xl md:text-6xl text-white'>Our <span className='TextShadow'>Roadmap</span></h4>
          </div>

          {/* chat board icon */}
          <div className='flex items-center gap-10 mt-3 md:mt-0'>
            <div className='flex items-center'>
              <img src={ChatIcon} alt="Chat Icon" className='w-5 md:w-6' />
              <p className='text-[15px] text-[#64677C] ml-3'>Chatbubble</p>
            </div>
            <div className='flex items-center'>
              <img src={LayersSharp} alt="Layers Sharp" className='w-6 md:w-8' />
              <p className='text-[15px] text-[#64677C] ml-3'>layers-sharp</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Roadmap;