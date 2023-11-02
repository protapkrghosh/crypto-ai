import React from 'react';
import "./Invertors.css";
import Container from '../../../Components/Container';
import ballImage from '../../../assets/image_199.png'
import handImage from '../../../assets/image_23.png'

const Investors = () => {
  return (
    <div className='bg-gradient-to-b from-[#171238] from-5% via-[#09051e] via-50% to-[#0a0621] to-100% -mt-[1px] pt-16 pb-20'>
      <Container>
        {/* Section Title */}
        <div>
          <h4 className='text-4xl md:text-6xl text-white text-center'>Investors <span className='TextDropShadow'>& Holders AI</span></h4>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 mt-10'>
          <div>
            <p className='text-[13px] text-[#64677C] leading-6 mb-10'>Connect to Uniswap Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet.</p>

            <div className='sm:flex-row flex flex-col justify-start'>
              <button className="text-white text-[14px] btn bg-gradient-to-r from-[#612EFE] to-[#B899FE] px-8 md:px-6 lg:px-7 border-none rounded-[19px] capitalize">Buy Now</button>
            </div>
          </div>

          <div className='lg:-mt-[90px] z-10'>
            <img src={ballImage} alt="Ball Image" className='w-[45%] md:w-[55%] mx-auto ObjectShadow' />
          </div>

          <div>
            <div className='flex justify-center md:justify-end gap-6'>
              <div className='bg-gradient-to-b from-[#31294c] from-5% via-[#31294c] via-50% to-[#0a061f] to-100% px-6 py-4 rounded-2xl'>
                <p className='text-[25px] text-[#d0cae1]'>140+</p>
                <p className='text-[13px] text-[#60627c]'>Partners</p>
              </div>
              <div className='bg-gradient-to-b from-[#31294c] from-5% via-[#31294c] via-50% to-[#0a061f] to-100% px-6 py-4 rounded-2xl'>
                <p className='text-[25px] text-[#d0cae1]'>208+</p>
                <p className='text-[13px] text-[#60627c]'>Invertors</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className='flex justify-end -mt-20'>
        <img src={handImage} alt="Hand Image" className='w-[80%] md:w-[70%]' />
      </div>
    </div>
  );
};

export default Investors;
