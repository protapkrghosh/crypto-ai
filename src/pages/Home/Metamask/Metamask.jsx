import React from 'react';
import "./Metamask.css"
import robot from "../../../assets/robot.png"
import Container from '../../../Components/Container';

const Metamask = () => {
  return (
    <div className='bg-gradient-to-b from-[#130e33] from-5% via-[#030014ec] via-50% to-[#18123a] to-100%">
      <div className="recta pt-20 md:pt-32'>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div>
            <img src={robot} alt="Robot" />
          </div>

          <div className='mt-0 md:mt-5'>
            <p className='text-4xl text-[#DDD7E9] border-l-4 border-[#7949ff85] pl-5 md:-ml-40'>Extension by going to <br /> metamask.io.</p>

            <div className=''>
              <p className='text-[#64677C] mt-12 mb-10'>
                Connect to Uniswap Go to app.uniswap.org in google chrome or
                on the browser inside your Metamask app. Connect your wallet.
                Paste the $AI token address into Uniswap
              </p>

              <div className='sm:flex-row flex flex-col justify-start gap-5 md:gap-10'>
                <button className="text-white text-[17px] btn bg-gradient-to-r from-[#612EFE] to-[#B899FE] px-8 border-none rounded-3xl capitalize">Buy Now</button>

                <button className="border-gradient px-8 py-3 rounded-3xl">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Metamask;