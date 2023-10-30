import { FiMenu } from 'react-icons/fi';
import logo from '../../../assets/logo.png';
import Container from '../../../Components/Container';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='z-50 duration-300 bg-[#808AF6] text-white'>
      <Container>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="navbar p-0 w-full z-10">
              <div className="lg:block flex-grow hidden">
                <ul className="menu-horizontal gap-6 text-[15px]">
                  {/* Navbar menu contents */}
                  <li>
                    <Link className="text-[#D9D9E0] hover:text-white duration-200" to="/">
                      Buy AI
                    </Link>
                  </li>
                  <li>
                    <Link className="text-[#D9D9E0] hover:text-white duration-200" to="/">
                      Whitepaper
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex-grow text-2xl md:text-3xl font-bold py-1 relative box-border mx-auto">
                <a href='/' className='bg-[#808AF6] border border-[#6770E5] p-6 rounded-b-3xl absolute -left-10 ml-14 lg:ml-0'>AI</a>
              </div>

              <div className="lg:hidden flex-none">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost  ">
                  <FiMenu size={25} />
                </label>
              </div>

              <div className="lg:block flex-none hidden">
                <ul className="menu-horizontal gap-6 text-[15px]">
                  {/* Navbar menu contents */}
                  <li>
                    <Link className="text-[#D9D9E0] hover:text-white duration-200" to="/">
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link className="text-[#D9D9E0] hover:text-white duration-200" to="/">
                      Telegram
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Drawer side menu */}
          <div className="drawer-side z-50">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="w-56 min-h-full py-4 space-y-3 text-[16px] font-semibold text-start duration-200 bg-gradient-to-b from-white to-[#bcc2ff]">
              {/* Sidebar content here */}
              <div className="lg:hidden pb-3 border-b border-[#808AF6]">
                <Link className="block" to="/">
                  <img className="mx-5" src={logo} alt="Logo" width={80} />
                </Link>
              </div>

              <li className="text-[#808AF6] hover:text-[#666ec4] duration-200 pl-5">
                <Link to="/">Buy AI</Link>
              </li>
              <li className="text-[#808AF6] hover:text-[#666ec4] duration-200 pl-5">
                <Link to="/">Whitepaper</Link>
              </li>
              <li className="text-[#808AF6] hover:text-[#666ec4] duration-200 pl-5">
                <Link to="/">Twitter</Link>
              </li>
              <li className="text-[#808AF6] hover:text-[#666ec4] duration-200 pl-5">
                <Link to="/">Telegram</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
