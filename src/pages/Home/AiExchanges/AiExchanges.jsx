import React from 'react';
import "./AiExchanges.css"
import Container from '../../../Components/Container';

const AiExchanges = () => {
  return (
    <div className='bg-gradient-to-b from-[#1b1542] from-5% via-[#030014] via-50% to-[#130e33] to-100% -mt-[1px] pt-28 pb-14 md:pt-40'>
      <Container>
        <div>
          <p className='text-4xl md:text-6xl text-[#DDD7E9] text-center px-2 customLeading'>AI is available on these <br /> exchanges</p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
            <div>
              <h3 className='text-[130px] md:text-[160px] lg:text-[175px] text-transparent bg-clip-text bg-gradient-to-b from-[#595762] from-15% via-[#030014] via-70% to-[#000000] to-100% -ml-3 text-center md:text-start'>01</h3>
              <p className='text-[#DDD7E9] text-[27px] -mt-[75px] mb-6 dpShadowFirst'>The majority teams</p>
              <p className='text-[#64677C] text-[15px]'>The experience of the team and advisors who will be working with the community will allow us to reach heights</p>
            </div>

            <div>
              <div className='mt-12'>
                <p className='text-[#DDD7E9] text-[27px] mb-6'>Better Data AI</p>
                <p className='text-[#64677C] text-[15px] dpShadowSecond'>I can generate AI-generated content on a wide range of topics. Please let me know what specific topic or type</p>
              </div>
              <h3 className='text-[130px] md:text-[160px] lg:text-[175px] text-transparent bg-clip-text bg-gradient-to-t from-[#2e294a] from-50% via-[#030014] via-70% to-[#0b062b] to-100% -ml-3 -mt-14 text-center md:text-start'>02</h3>
            </div>

            <div>
              <h3 className='text-[130px] md:text-[160px] lg:text-[175px] text-transparent bg-clip-text bg-gradient-to-b from-[#595762] from-15% via-[#030014] via-70% to-[#000000] to-100% -ml-3 text-center md:text-start'>03</h3>
              <p className='text-[#DDD7E9] text-[27px] -mt-[75px] mb-6 dpShadowFirst'>Meet Chat AI ROBOT</p>
              <p className='text-[#64677C] text-[15px]'>Whether it s writing, information,
                recommendations, or anything else, feel free to provide more details</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AiExchanges;