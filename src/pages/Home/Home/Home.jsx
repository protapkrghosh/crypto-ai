import AiExchanges from "../AiExchanges/AiExchanges";
import Banner from "../Banner/Banner";
import Invertors from "../Invertors/Invertors";
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
      <Invertors />
      <Testimonial />
    </div>
  );
};

export default Home;