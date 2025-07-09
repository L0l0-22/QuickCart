import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import kitchen from "../assets/kitchen.jfif"
import gym from "../assets/gym.jpg"
import electronics from "../assets/electronics.jfif"
import { MdArrowOutward } from 'react-icons/md';
const categories = [
{
    id: 1,
    title: 'Home Appliances',
    image: kitchen,
    itemCount: 200,
    subcategories: [
    'Kitchen Appliances',
    'Personal Care Appliances',
    'Entertainment Systems',
    'Office Electronics',
    'Printers & Scanners',
    'Electrical Appliances',
    ],
},
{
    id: 2,
    title: 'Electrical Appliances',
    itemCount: 400,
    image: electronics,
    subcategories: [
    'Kitchen Appliances',
    'Personal Care Appliances',
    'Entertainment Systems',
    'Office Electronics',
    'Printers & Scanners',
    'Electrical Appliances',
    ],
},
{
    id: 3,
    title: 'Sports & Outdoors',
    image: gym,
    itemCount: 200,
    subcategories: [
    'Kitchen Appliances',
    'Personal Care Appliances',
    'Entertainment Systems',
    'Office Electronics',
    'Printers & Scanners',
    'Electrical Appliances',
    ],
},
];

export default function Featured() {
return (
    <div className=" py-12 px-20 bg-white">
    <div className="flex justify-center items-center ">
        <div>
       <h2 className="text-3xl font-bold flex text-center justify-center items-center mb-6">
            Featured 
            <div className="border border-[#FF3C3C] h-1 w-7 bg-[#FF3C3C] mt-7 mx-2"></div>
            <span className="text-[#FF3C3C]">Categories</span>
        </h2>
        </div>
        {/* <button className="bg-main text-white px-4 py-2 rounded-lg font-medium">
        All Categories
        </button> */}
    </div>
    <Swiper
        spaceBetween={30}
        slidesPerView={5}
        pagination={{ clickable: true }}
        breakpoints={{
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
        }}
        modules={[Pagination]}
        className=' pb-10 pt-5 my-custom-swiper'
    >
        {categories.map((cat) => (
        <SwiperSlide key={cat.id}>
        <div className="relative group overflow-hidden rounded-xl shadow-md h-[370px] bg-white text-black p-5">
            {cat.image && (
            <img
                src={cat.image}
                alt={cat.title}
                className="rounded-xl object-cover w-full h-64 mb-4"
                />
            )}
            <div className="absolute inset-0 bg-main bg-opacity-90 text-white flex flex-col justify-between p-6 transition-all duration-500 transform -translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
            <div>
                <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
                <p className="text-sm text-gray-300 mb-6">• {cat.itemCount} items available</p>
                {cat.subcategories?.length > 0 && (
                <ul className="space-y-2">
                    {cat.subcategories.map((sub, idx) => (
                    <li
                        key={idx}
                        className={`text-sm border-l-2 pl-2 ${
                        sub === 'Personal Care Appliances'
                            ? 'text-red-400 border-red-400'
                            : 'border-white'
                        }`}
                    >
                        {sub}
                    </li>
                    ))}
                </ul>
                )}
            </div>

            <div className="flex justify-end">
                <button className="bg-red-500 text-white p-2 rounded-full">
                <MdArrowOutward size={18} />
                </button>
            </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 z-10 group-hover:opacity-0 transition-opacity duration-300">
            <div className="bg-gray-100 rounded-lg px-4 py-2 shadow">
                <h3 className="text-base font-bold text-main">{cat.title}</h3>
                <p className="text-xs text-redS">• {cat.itemCount} items</p>
            </div>
            </div>
        </div>
        </SwiperSlide>
        ))}
        {categories.map((cat) => (
        <SwiperSlide key={cat.id}>
        <div className="relative group overflow-hidden rounded-xl shadow-md h-[370px] bg-white text-black p-5">
            {cat.image && (
            <img
                src={cat.image}
                alt={cat.title}
                className="rounded-xl object-cover w-full h-64 mb-4"
                />
            )}
            <div className="absolute inset-0 bg-main bg-opacity-90 text-white flex flex-col justify-between p-6 transition-all duration-500 transform -translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
            <div>
                <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
                <p className="text-sm text-gray-300 mb-6">• {cat.itemCount} items available</p>
                {cat.subcategories?.length > 0 && (
                <ul className="space-y-2">
                    {cat.subcategories.map((sub, idx) => (
                    <li
                        key={idx}
                        className={`text-sm border-l-2 pl-2 ${
                        sub === 'Personal Care Appliances'
                            ? 'text-red-400 border-red-400'
                            : 'border-white'
                        }`}
                    >
                        {sub}
                    </li>
                    ))}
                </ul>
                )}
            </div>
            <div className="flex justify-end">
                <button className="bg-red-500 text-white p-2 rounded-full">
                <MdArrowOutward size={18} />
                </button>
            </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 z-10 group-hover:opacity-0 transition-opacity duration-300">
            <div className="bg-gray-100 rounded-lg px-4 py-2 shadow">
                <h3 className="text-base font-bold text-main">{cat.title}</h3>
                <p className="text-xs text-redS">• {cat.itemCount} items</p>
            </div>
            </div>
        </div>
        </SwiperSlide>
        ))}
    </Swiper>
    </div>
);
}
