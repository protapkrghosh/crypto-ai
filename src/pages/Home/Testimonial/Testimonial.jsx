import React from 'react';
import "./Testimonial.css";
import Slider from 'react-infinite-logo-slider';
import person1 from "../../../assets/person/person1.jpg";
import person2 from "../../../assets/person/person2.jpeg";
import Container from '../../../Components/Container';

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      name: 'Amit Ray',
      position: 'Co-founder',
      image: 'https://i.ibb.co/23MdJ7V/1678667081539.jpg',
      content: 'As more and more artificial intelligence is entering into the world, more and more emotional decisions with confidence intelligence must enter into leadership.'
    },
    {
      id: 2,
      name: 'John Ray',
      position: 'Technology Entrepreneurship',
      image: 'https://i.ibb.co/GTd38Qt/person4.jpg',
      content: 'The crypto guide markets unpredictability and constant left me feeling fluctuations provide invaluable insights overwhelmed and unsure of my decisions.'
    },
    {
      id: 3,
      name: 'Zesty',
      position: 'Famous AI Scientist',
      image: 'https://i.ibb.co/S0SXhmZ/person5.jpg',
      content: 'The artificial intelligence algorithms powering this platform me make informed have helping brought a new level of sophistication to my crypto investments.'
    },
  ];

  return (
    <div className='bg-gradient-to-b from-[#030015] from-5% via-[#040117] via-50% to-[#030014] to-100% -mt-[1px] pt-20 pb-28'>

      {/* Section title */}
      <div>
        <h4 className='text-4xl md:text-6xl text-center text-white mb-16'><span className='TextShadow1'>WHAT</span> <span className='TextShadow2'>OTHERS</span> SAY</h4>

        {/* Testimonial infinite loop card */}
        <Slider duration={80} pauseOnHover={true} blurBorders={false} blurBorderColor={'#fff'} width="700px">
          {testimonialData.map(item => (
            <Slider.Slide key={item.id}>
              <div className="p-[1px] bg-gradient-to-b from-[#423863dc] from-10% to-[#060217] to-90% rounded-[20px] mr-8">
                <div className='bg-gradient-to-b from-[#312a49] from-10% to-[#060217] to-90% rounded-[20px] min-h-[250px] px-10 py-8'>
                  <div>
                    <p className='text-[14px] text-[#64677C] text-center'> {item.content} </p>
                    <div className='border-b border-[#cfb8ff2c] w-[75%] mx-auto my-8'></div>
                  </div>

                  <div className='flex justify-center items-center'>
                    <div>
                      <img src={item.image} alt="" className='w-10 rounded-full' />
                    </div>

                    <div className='text-[#64677C] ml-5'>
                      <h3 className='text-[19px]'>{item.name}</h3>
                      <h4 className='text-[11px]'>{item.position}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Slider.Slide>
          ))}
        </Slider>

        <Container>
          {/* Testimonial card */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-5'>
            {/* Card One */}
            <div className="p-[1px] bg-gradient-to-b from-[#423863ab] from-10% to-[#060217] to-90% rounded-[20px]">
              <div className='bg-gradient-to-b from-[#040116] from-10% to-[#030014] to-90% rounded-[20px] min-h-[250px] px-5 md:px-7 lg:px-10 py-8'>
                <div>
                  <p className='text-[14px] text-[#64677C] text-center'>
                    AI doesn't have to be evil to destroy humanity if AI has
                    a goal complexity and humanity just happens to come in the way, it
                    will destroy humanity as a matter of course.
                  </p>
                  <div className='border-b border-[#cfb8ff2c] w-[75%] mx-auto my-8'></div>
                </div>

                <div className='flex justify-center items-center'>
                  <div>
                    <img src={person1} alt="" className='w-10 rounded-full' />
                  </div>

                  <div className='text-[#64677C] ml-5'>
                    <h3 className='text-[19px]'>Panglima Bagas</h3>
                    <h4 className='text-[11px]'>CEO of Log Zetas</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Two */}
            <div className="p-[1px] bg-gradient-to-b from-[#423863ab] from-10% to-[#060217] to-90% rounded-[20px]">
              <div className='bg-gradient-to-b from-[#040116] from-10% to-[#030014] to-90% rounded-[20px] min-h-[250px] px-5 md:px-7 lg:px-10 py-8'>
                <div>
                  <p className='text-[14px] text-[#64677C] text-center'>
                    Robots are not going to replace humans, they are going
                    to make their jobs much more humane. The difficulty lay in breaking through the complexity of the cryptocurrency market.
                  </p>
                  <div className='border-b border-[#cfb8ff2c] w-[75%] mx-auto my-8'></div>
                </div>

                <div className='flex justify-center items-center'>
                  <div>
                    <img src={person2} alt="" className='w-10 rounded-full' />
                  </div>

                  <div className='text-[#64677C] ml-5'>
                    <h3 className='text-[19px]'>Elon Musk</h3>
                    <h4 className='text-[11px]'>Famous AI Scientist</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Testimonial;
