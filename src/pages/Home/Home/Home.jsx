import AiExchanges from "../AiExchanges/AiExchanges";
import Banner from "../Banner/Banner";
import Metamask from "../Metamask/Metamask";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Banner />
      <Team />
      <Metamask />
      <AiExchanges />
    </div>
  );
};

export default Home;