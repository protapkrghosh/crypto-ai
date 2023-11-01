import AiExchanges from "../AiExchanges/AiExchanges";
import Banner from "../Banner/Banner";
import Metamask from "../Metamask/Metamask";
import Roadmap from "../Roadmap/Roadmap";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Team />
      <Metamask />
      <AiExchanges />
      <Roadmap />
      <Testimonial />
    </div>
  );
};

export default Home;