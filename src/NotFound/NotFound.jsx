import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../assets/404_Not-found.png"

const NotFound = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-t from-white to-[#bcc2ff] pb-10">
      <div className="hero-content text-center">
        <div>
          <div className='mb-8 w-96 mx-auto'>
            <img src={image} alt="Page Not Found" />
          </div>
          <h1 className="text-5xl font-bold">Oops! <br />Page not found</h1>
          <p className="py-6">The page you are looking for could not be found.</p>
          <Link to="/" className="btn btn-outline border-[#6770E5] hover:border-[#6770E5] hover:bg-[#808AF6] capitalize"> <FaArrowLeft className='mr-2' /> Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
