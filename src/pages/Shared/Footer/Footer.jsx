import logo from '../../../assets/logo.png'
import Container from "../../../Components/Container";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#3B2270] to-[#030014]">
      <Container>
        <footer className="flex-none md:flex py-16">
          <div>
            <img src={logo} alt="" className='w-28' />
            <p className='text-[#64677C] text-[15px] mt-10 md:w-[70%] mb-10 md:mb-0'>ChatAI, make life full of AI, talk to AI in the web page, in the telegram, in all chat tools, and AI answers any answer.</p>
          </div>

          <div className='footer'>
            <nav>
              <header className="text-xl text-[#DDD7E9] mb-5">Follow us</header>
              <a className="text-[#64677C] link link-hover">Twitter</a>
              <a className="text-[#64677C] link link-hover my-3">Telegram</a>
              <a className="text-[#64677C] link link-hover">Buy AI</a>
            </nav>
            <nav>
              <header className="text-xl text-[#DDD7E9] mb-5">About Us</header>
              <a className="text-[#64677C] link link-hover">Documentation</a>
              <a className="text-[#64677C] link link-hover my-3">Privacy Policy</a>
              <a className="text-[#64677C] link link-hover">Pressreleases</a>
            </nav>
            <nav>
              <header className="text-xl text-[#DDD7E9]">Contact Us</header>
              <div className="mt-5">
                <input type="text" placeholder="Enter Your Email" className="text-[14px] text-white placeholder:text-white input input-bordered bg-[#7A49FF] w-60 pr-16 rounded-full pl-6" />
              </div>
            </nav>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
