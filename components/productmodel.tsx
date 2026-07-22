// components/ProductCard.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import useCart from "../shop/zustandShop/UseCart";

interface ProductProps {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

export default function ProductModel({
  title,
  image,
  price,
  id,
  description,
  category,
}: ProductProps) {
  const { cart, add, remove } = useCart();
  const [displayNumber, setDisplayNumber] = useState<number>(0);

  useEffect(() => {
    const number = cart.find((item) => item.id === id)?.quantity;
    setDisplayNumber(number || 0);
  }, [cart, id]);

  const finalPrice = (price - price * 0.1).toFixed(2);

  return (
    <Link href={`/single-product/${id}`}>
      <div className="group h-full flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm dark:shadow-gray-900/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-gray-900/50">
        {/* IMAGE */}
        <div className="relative flex items-center justify-center bg-gray-100 dark:bg-gray-700 h-36 sm:h-48 lg:h-64 p-2 sm:p-4">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full">
            10% OFF
          </span>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105 dark:brightness-90"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col flex-1 p-3 sm:p-4">
          <span className="w-fit text-[10px] sm:text-xs font-semibold bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full capitalize mb-2">
            {category}
          </span>

          <h3 className="font-bold text-sm sm:text-base lg:text-[17px] text-gray-800 dark:text-gray-100 line-clamp-2 min-h-[42px] sm:min-h-[50px]">
            {title}
          </h3>

          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-2 line-clamp-2 min-h-[34px] sm:min-h-[40px]">
            {description}
          </p>

          <div className="mt-4">
            <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 line-through">
              ${price}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-1">
              <p className="text-lg sm:text-2xl font-bold text-green-600 dark:text-green-400">
                ${finalPrice}
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-auto pt-4">
            {displayNumber > 0 ? (
              <div className="flex items-center justify-between">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    remove(id);
                  }}
                  className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white text-lg transition"
                >
                  −
                </button>

                <span className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {displayNumber}
                </span>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    add(id);
                  }}
                  className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white text-lg transition"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  add(id);
                }}
                className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 py-2.5 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                Buy Now
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}