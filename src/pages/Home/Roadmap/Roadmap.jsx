import React from 'react';
import "./Roadmap.css"
import Container from '../../../Components/Container';
import ChatIcon  from '../../../assets/Chat.png';
import LayersSharp  from '../../../assets/layers-sharp.png';

const Roadmap = () => {
  return (
    <div className='bg-gradient-to-b from-[#130e33] from-5% via-[#030014] via-50% to-[#1b1542] to-100% -mt-[1px] pt-12 pb-20'>
      <Container>
        <div className='flex justify-between items-center'>
          <div>
            <h4 className='text-4xl md:text-6xl text-white'>Our <span className='TextShadow'>Roadmap</span></h4>
          </div>

          {/* chat board icon */}
          <div className='flex items-center gap-10'>
            <div className='flex items-center'>
              <img src={ChatIcon} alt="Chat Icon" className='w-7' />
              <p className='text-[#64677C] ml-3'>Chatbubble</p>
            </div>
            <div className='flex items-center'>
              <img src={LayersSharp} alt="Layers Sharp" className='w-9' />
              <p className='text-[#64677C] ml-3'>layers-sharp</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Roadmap;