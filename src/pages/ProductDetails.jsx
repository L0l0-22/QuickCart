import { useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import mainImg from "../assets/img4.png";
import mini1 from "../assets/img3.png";
import mini2 from "../assets/img1.png";
import mini3 from "../assets/img2.png";
import mini4 from "../assets/img5.png";
import { GiCardboardBoxClosed, GiWorld } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { PiShippingContainer } from "react-icons/pi";

export default function ProductDetails() {
const product = {
    name: "DualSense Wireless Controller for PS5",
    oldPrice: 79.99,
    price: 64.99,
    discount: 19,
    rating: 4,
    reviews: 428,
    said: 1234,
    colors: ["White", "Black"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [mini1, mini2, mini3, mini4],
    description: [
    "Immersive haptic feedback that responds to in-game actions in real-time",
    "Adaptive triggers offering dynamic tension for more realistic gameplay",
    "Ergonomic design for comfortable grip during extended play sessions",
    ],
    reviewsList: [
    {
        name: "Alex Mahito",
        date: "12 Jul 2025",
        rating: 5,
        comment:
        "Amazing grip and feedback! This is the best controller I've used on PlayStation. A must-have.",
    },
    {
        name: "Sara Kon",
        date: "10 Jul 2025",
        rating: 4,
        comment:
        "Great performance overall, but battery life could be slightly better.",
    },
    ],
};
const [selectedColor, setSelectedColor] = useState(product.colors[0]);
const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
return (
    <div className="w-full px-4 lg:px-24 py-8 flex flex-col lg:flex-row gap-12">
    <div className="flex md:flex-row flex-col w-full lg:w-[49%] gap-6 md:gap-0">
        <div className="flex md:flex-col gap-2">
        {product.images.map((img, index) => (
            <img
            key={index}
            src={img}
            alt={`thumbnail-${index}`}
            className="lg:h-32 md:h-36 h-16 object-cover rounded cursor-pointer "
            />
        ))}
        </div>
        <img
        src={mainImg}
        alt="Main Product"
        className="w-full md:h-[600px] lg:h-[535px] object-contain rounded-lg bg-white lg:ml-4"
        />
    </div>
    <div className="w-full lg:w-[50%] flex flex-col gap-1">
        <h2 className="text-3xl font-semibold mb-1">{product.name}</h2>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <div className="flex">
            {[...Array(5)].map((_, i) =>
                i < product.rating ? (
                <AiFillStar key={i} className="text-yellow-400 text-lg" />
                ) : (
                <AiOutlineStar key={i} className="text-gray-300 text-lg" />
                )
            )}
            </div>
            <span className="text-main font-medium">[{product.rating}]</span>
            <span className="text-redS font-medium">
            {product.reviews} reviews
            </span>
            <span className="text-gray-500 font-medium">· {product.said} Said</span>
        </div>
        <div className="flex items-center gap-4 text-main mb-2">
            <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
            <p className="text-gray-400 line-through text-base">
                ${product.oldPrice.toFixed(2)}
            </p>
            <span className="text-green-700 bg-green-100 rounded-full px-2 py-1 font-medium text-sm">
                {product.discount}% OFF
            </span>
        </div>
        <div className="mb-3">
            <p className="text-base font-semibold mb-2">Available Colors</p>
            <div className="flex gap-2 flex-wrap">
            {product.colors.map((color, i) => (
                <button
                key={i}
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-1 rounded border ${
                    selectedColor === color
                    ? "bg-redS text-white"
                    : "bg-white text-main"
                }`}
                >
                {color}
                </button>
            ))}
            </div>
        </div>
        <div className="mb-2">
            <p className="text-base font-semibold mb-2">Available Size</p>
            <div className="flex gap-2 flex-wrap">
            {product.sizes.map((size) => (
                <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`border px-3 py-1 rounded text-sm ${
                    selectedSize === size
                    ? "bg-redS text-white"
                    : "bg-white text-black"
                }`}
                >
                {size}
                </button>
            ))}
            </div>
            <p className="text-sm text-redS mt-2">Only 5 Stocks Left</p>
        </div>
        <div className="mb-3">
            <p className="text-base font-semibold mb-2">Description:</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {product.description.map((line, i) => (
                <li key={i}>{line}</li>
            ))}
            </ul>
        </div>
        <div className="mb-2">
            <p className="text-base font-semibold mb-2">Shipping Information</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="border rounded-md p-3 flex items-center gap-2">
                    <div className="bg-gray-100 rounded-full p-2">
                        <TbTruckDelivery size={20} className="text-redS"/>
                    </div>
                    <div >
                        <p className="text-gray-500 mb-1 text-sm">Delivery</p>
                        <p className="font-medium text-xs">Jakarta, Indonesia</p>
                    </div>
                </div>
                <div className="border rounded-md p-3 flex items-center gap-2">
                    <div className="bg-gray-100 rounded-full p-2">
                        <GiCardboardBoxClosed size={20} className="text-redS"/>
                    </div>
                    <div className="w-full">
                        <p className="text-gray-500 mb-1 text-sm">Shipping</p>
                        <p className="font-medium text-xs">International Shipping</p>
                    </div>
                </div>
                <div className="border rounded-md p-3 flex items-center gap-2">
                    <div className="bg-gray-100 rounded-full p-2">
                        <MdDateRange size={20} className="text-redS"/>
                    </div>
                    <div >
                        <p className="text-gray-500 mb-1 text-sm">Arrive</p>
                        <p className="font-medium text-xs">Estimated on 27/3/2022</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <p className="text-base font-semibold mb-2">Reviews</p>
            {product.reviewsList.map((r, i) => (
            <div key={i} className="border p-4 rounded-md mb-3">
                <div className="flex items-center justify-between mb-1">
                <p className="font-semibold text-sm">{r.name}</p>
                <span className="text-xs text-gray-500">{r.date}</span>
                </div>
                <div className="flex items-center mb-2">
                {[...Array(5)].map((_, idx) =>
                    idx < r.rating ? (
                    <AiFillStar
                        key={idx}
                        className="text-yellow-400 text-sm mr-1"
                    />
                    ) : (
                    <AiOutlineStar
                        key={idx}
                        className="text-gray-300 text-sm mr-1"
                    />
                    )
                )}
                </div>
                <p className="text-sm text-gray-700">{r.comment}</p>
            </div>
            ))}
        </div>
    </div>
    </div>
);
}
