import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FiHeart, FiShoppingBag, FiUser } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm w-full z-50 h-[65px]">
      <div className="flex justify-between items-center px-20 py-3">
        <div className="flex items-center gap-6">
          <NavLink to="/">
            <img src={logo} alt="QuickCart Logo" className="w-[150px] h-auto" />
          </NavLink>
         <button className="mt-2 text-gray-600 font-medium whitespace-nowrap flex items-center text-base hover:text-redS transition-colors duration-200 group">
            <TbTruckDelivery className="mr-2 text-redS group-hover:scale-110 transition-transform duration-200" size={22}/>
              Deliver to <span className="font-semibold text-black group-hover:text-redS ml-1 transition-colors duration-200">Cairo</span>
            <MdOutlineArrowDropDown size={22} className="text-black group-hover:text-redS transition-colors duration-200"/>
        </button>
        </div>
        <div className="flex flex-1 max-w-2xl mx-6">
          <input
            type="text"
            placeholder="Search in Product"
            className="w-full border border-gray-300 px-4 py-2 rounded-l-3xl focus:outline-none"
          />
          <button className="bg-redS text-white px-6 py-2 rounded-r-3xl font-medium">
            Search
          </button>
        </div>
        <div className="flex items-center gap-4 text-gray-700">
          <button className=" font-medium hover:text-gray-500 flex items-center ">
          <MdOutlineArrowDropDown size={22} className="mt-1"/>
            العربية
          </button>
          <FiHeart className="bg-gray-100 rounded-full px-2 py-1 w-10 h-10 cursor-pointer hover:text-redS" />
          <FiShoppingBag className="bg-gray-100 rounded-full px-2 py-1 w-10 h-10 cursor-pointer hover:text-gray-500" />
          <button className="text-lg font-medium text-gray-700 flex items-center bg-gray-100 rounded-full px-4 py-1 h-10 hover:text-gray-500">
            Login
          <FiUser className=" ml-2" size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
