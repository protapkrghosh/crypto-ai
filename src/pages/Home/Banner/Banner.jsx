import "./Banner.css"
import aiCircle from "../../../assets/ai-circle.png"
import Container from "../../../Components/Container";

const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-[#231c51] from-10% via-[#030014] via-40% to-[#231c51] to-90%">
      <div className="rectangle">
        <div className="min-h-[100vh] bg-robot">

          {/* Banner contents */}
          <Container>
            <div className="flex justify-between md:pt-32">
              <div>
                <h2 className="text-3xl md:text-7xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#8f92b5] leading-10">Welcome <br /> to Ai.com</h2>
              </div>

              {/* Ai content card */}
              <div>
                <div className="flex justify-center md:mr-10">
                  <div className="flex items-center border border-[#362d71a4] rounded-2xl px-10 py-6 bg-gradient-to-r from-[#0401163f] from-10% to-[#1f1a41] to-90%">
                    <img src={aiCircle} alt="" className="w-20 mr-8" />
                    <div>
                      <h3 className="text-[#DDD7E9] text-4xl">ai.com</h3>
                      <p className=" text-white uppercase">For 24 hours</p>
                    </div>
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