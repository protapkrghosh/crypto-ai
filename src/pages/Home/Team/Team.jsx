import React from 'react';
import "./Team.css"
import Container from '../../../Components/Container';

const Team = () => {
  return (
    <div className='bg-gradient-to-b from-[#110C2E] from-10% to-[#130e33] to-90% pb-20'>
      <Container>
        <div className='p-[1px] bg-gradient-to-b from-[#7063637e] from-10% to-[#6d3dfe93] to-90% rounded-2xl'>
          <div className='text-center pt-14 pb-24 bg-gradient-to-b from-[#3D2A63] from-10% to-[#231B45] to-90% rounded-2xl'>
            <p className='text-3xl md:text-5xl text-[#DDD7E9] w-[55%] mx-auto customLeading'>The team was able to obtain the domain</p>

            <p className='text-[#B0A3CA] w-[55%] mx-auto mt-5 mb-8'>ai.com which is spelled with the Latin ‘A’ which leads us back to the very first research on human nature</p>

            <button className='text-white text-[17px] btn bg-gradient-to-r from-[#612EFE] to-[#B899FE] px-8 border-none rounded-full capitalize'>Explore</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Team;