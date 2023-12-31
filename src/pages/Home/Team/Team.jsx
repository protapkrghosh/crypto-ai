import React from 'react';
import "./Team.css"
import Container from '../../../Components/Container';

const Team = () => {
  return (
    <div className='bg-gradient-to-b from-[#110C2E] from-10% to-[#130e33] to-90% pb-1 -my-[2px]'>
      <Container>
        <div className='p-[1px] bg-gradient-to-b from-[#70636365] from-10% to-[#6d3dfe93] to-90% rounded-2xl'>
          <div className='bg-gradient-to-b from-[#3D2A63] from-10% to-[#231B45] to-90% rounded-2xl'>
            <div className='text-center pt-10 pb-16 lg:pt-14 lg:pb-24 bg-pattern'>
              <p className='text-3xl md:text-5xl text-[#DDD7E9] md:w-[80%] lg:w-[60%] mx-auto px-2 customLeading'>The team was able to obtain the domain</p>

              <p className='text-[#B0A3CA] md:w-[60%] mx-auto px-2 mt-5 mb-8'>ai.com which is spelled with the Latin ‘A’ which leads us back to the very first research on human nature</p>

              <div className='sm:flex-row flex flex-col justify-start md:justify-center px-5 md:px-0'>
                <button className="text-white text-[14px] btn bg-gradient-to-r from-[#612EFE] to-[#B899FE] px-8 md:px-6 lg:px-7 border-none rounded-[19px] capitalize">Explore</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Team;