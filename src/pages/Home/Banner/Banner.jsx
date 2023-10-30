import "./Banner.css"
import aiCircle from "../../../assets/ai-circle.png"
import badge from "../../../assets/badge.png"
import Container from "../../../Components/Container";

const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-[#231c51] from-10% via-[#030014] via-40% to-[#231c51] to-90%">
      <div className="rectangle">
        <div className="min-h-[100vh] bg-robot">

          {/* Banner contents */}
          <Container>
            <div className="lg:flex justify-end gap-72 pt-14 md:pt-32">
              <div>
                <h2 className="text-5xl md:text-7xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#8f92b5] leading-10">Welcome <br /> to Ai.com</h2>

                {/* Count */}
                <div className="mt-10 md:mt-72">
                  <div className="flex items-center mb-8">
                    <p className="text-4xl text-[#DDD7E9] mr-5">205+</p>
                    <p className="text-[#64677C] text-[15px] uppercase">ai.com with <br /> punycode</p>
                  </div>

                  <div className="flex items-center mb-8">
                    <p className="text-4xl text-[#DDD7E9] mr-5">2000%</p>
                    <p className="text-[#64677C] text-[15px] uppercase">ai.com with <br /> punycode</p>
                  </div>
                </div>
              </div>

              {/* Ai content card */}
              <div className="md:ml-14 mt-10 md:mt-0">
                <div>
                  <div className="flex items-center border border-[#362d71a4] rounded-3xl px-10 py-4 bg-gradient-to-r from-[#0401163f] from-10% to-[#1f1a41] to-90% w-[350px]">
                    <img src={aiCircle} alt="" className="w-20 mr-8" />
                    <div>
                      <h3 className="text-[#DDD7E9] text-4xl">ai.com</h3>
                      <p className=" text-white uppercase text-[13px] mt-2">For 24 hours</p>
                    </div>
                  </div>
                  <p className="text-[#8A8D9F] mt-8">
                    Specific applications of AI include
                    expert systems, natural language
                    processing, speech recognition and
                    machine vision.
                  </p>

                  {/* Explore Badge */}
                  <div className="flex justify-end mt-14">
                    <img src={badge} alt="" className="w-44"/>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Banner;