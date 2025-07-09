import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { RiMenu2Line } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
export default function SecNavbar() {
    return (
    <nav className="flex items-center justify-center gap-12 mt-1 pt-4  w-full z-40 bg-white shadow-sm">
        <button className="flex items-center bg-redS text-white px-4 py-2 rounded text-base font-semibold mb-3">
            <RiMenu2Line className="mr-2" size={20}/>
            Browse Categories
            <IoIosArrowDown className="ml-2" size={20}/>
        </button>
        <div className="flex gap-16 px-6 pb-3 text-base font-bold text-gray-500">
            <NavLink to="/shop" className="hover:text-redS">Shop</NavLink>
            <NavLink to="/brands" className="hover:text-redS">Brands</NavLink>
            <NavLink to="/vendor" className="hover:text-redS">Our Vendor</NavLink>
            <NavLink to="/pages" className="hover:text-redS">Page</NavLink>
            <NavLink to="/customer" className="hover:text-redS">Customer</NavLink>
            <NavLink to="/more" className="hover:text-redS">Page</NavLink>
            <NavLink to="/special" className="text-redS">Special Offer</NavLink>
        </div>
    </nav>
    )
}
