import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FiHeart, FiShoppingBag, FiUser } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm w-full z-50 h-40 md:h-[65px]">
      <div className="flex flex-col md:flex-row justify-between items-center md:px-4 lg:px-20 py-3">
        <div className="flex items-center lg:gap-6 w-full justify-between md:w-auto md:justify-normal">
          <NavLink to="/">
            <img src={logo} alt="QuickCart Logo" className="w-[150px] h-auto" />
          </NavLink>
          <button className="mt-2 text-gray-600 font-medium whitespace-nowrap flex items-center text-xs lg:text-base hover:text-redS transition-colors duration-200 group">
            <TbTruckDelivery className="mr-2 text-redS group-hover:scale-110 transition-transform duration-200" size={22}/>
              Deliver to <span className="font-semibold text-black group-hover:text-redS ml-1 transition-colors duration-200">Cairo</span>
            <MdOutlineArrowDropDown size={22} className="text-black group-hover:text-redS transition-colors duration-200"/>
        </button>
        </div>
        <div className="flex flex-1 lg:max-w-2xl mx-3 mt-1 lg:mt-0 w-full px-2 md:px-0">
          <input
            type="text"
            placeholder="Search in Products"
            className="w-full border border-gray-300 px-3 lg:px-4 py-1 lg:py-2 rounded-l-3xl focus:outline-none"
          />
          <button className="bg-redS text-white px-3 lg:px-6 py-1 lg:py-2 rounded-r-3xl font-medium">
            Search
          </button>
        </div>
        <div className="flex items-center justify-end md:justify-normal mr-9 md:mr-0 gap-4 md:gap-1 lg:gap-4 text-gray-700 mt-3 md:mt-0 w-full md:w-auto">
          <button className=" lg:text-base text-base md:text-sm font-medium hover:text-gray-500 flex items-center">
            <MdOutlineArrowDropDown className="mt-1 md:w-4 md:h-4 lg:w-5 lg:h-5 w-5 h-5" />
            العربية
          </button>
          <FiHeart className="bg-gray-100 rounded-full p-2 lg:p-2 md:p-1 md:w-[27px] md:h-[24px] lg:w-11 lg:h-10 w-11 h-10 cursor-pointer hover:text-redS" />
          <FiShoppingBag className="bg-gray-100 rounded-full p-2 lg:p-2 md:p-1 md:w-[27px] md:h-[24px] lg:w-11 lg:h-10 w-11 h-10 cursor-pointer hover:text-gray-500" />
          <button className="md:text-xs text-lg lg:text-lg font-medium text-gray-700 flex items-center bg-gray-100 rounded-full px-2 md:px-2 lg:px-4 py-1 h-10 md:h-6 lg:h-10 hover:text-gray-500">
            Login
            <FiUser className="ml-2 md:w-4 md:h-4 lg:w-6 lg:h-6 w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
