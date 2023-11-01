import React from 'react';
import "./Roadmap.css"
import icon from "../../../assets/icon.png"
import Container from '../../../Components/Container';
import ChatIcon from '../../../assets/Chat.png';
import LayersSharp from '../../../assets/layers-sharp.png';

const Roadmap = () => {
  return (
    <div className='bg-gradient-to-b from-[#130e33] from-5% via-[#030014] via-50% to-[#1b1542] to-100% -mt-[1px] pt-12 pb-20'>
      {/* Section title */}
      <Container>
        <div className='flexMap mb-14'>
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

      {/* Roadmap content */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-b-8 border-[#1B1545]'>
        <div className='flex justify-center items-end pb-6'>
          <p className='text-[13px] text-[#64677C]'>Q4 2023</p>
        </div>

        {/* Phase 2 */}
        <div className='border-l border-[#7A49FF] pl-6 pb-6'>
          <div className='phaseTwo'>
            <h4 className='text-[20px] text-[#DDD7E9] mb-4'>Phase 2</h4>
            <p className='text-[13px] text-[#64677C] leading-7 mb-16'>2000 Telegram members <br /> Extend or burn liquidity <br /> $1.5m MC</p>
            <p className='text-[13px] text-[#64677C] text-center'>Q1 2023</p>
          </div>

          <div className='relative'>
            <img src={icon} alt="Icon" className='absolute -left-[43px] top-[10px]' />
          </div>
        </div>

        {/* Phase 4 */}
        <div className='border-l border-[#7A49FF] pl-6 pb-6'>
          <div className='phaseFour'>
            <h4 className='text-[20px] text-[#DDD7E9] mb-4'>Phase 4</h4>
            <p className='text-[13px] text-[#64677C] leading-7 mb-16'>Utility Development Completion <br /> CEX Listing <br /> Us to reach heights</p>
          </div>
          <p className='text-[13px] text-[#64677C] text-center'>Q2 2022</p>

          <div className='relative'>
            <img src={icon} alt="Icon" className='absolute -left-[43px] top-[10px]' />
          </div>
        </div>

        {/* Phase 6 */}
        <div className='border-l border-[#7A49FF] pl-6 pb-6'>
          <h4 className='text-[20px] text-[#DDD7E9] mb-4'>Phase 6</h4>
          <p className='text-[13px] text-[#64677C] leading-7 mb-16'>minimum 3-month <br /> Begin marketing the <br /> Project to community</p>

          <div className='relative'>
            <img src={icon} alt="Icon" className='absolute -left-[43px] top-[28px]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;