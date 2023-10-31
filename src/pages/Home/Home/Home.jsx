import AiExchanges from "../AiExchanges/AiExchanges";
import Banner from "../Banner/Banner";
import Metamask from "../Metamask/Metamask";
import Roadmap from "../Roadmap/Roadmap";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Banner />
      <Team />
      <Metamask />
      <AiExchanges />
      <Roadmap />
    </div>
  );
};

export default Home;