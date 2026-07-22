// components/ProductsHome.tsx
"use client";

import { useEffect, useState } from "react";


import ProductModel from "./productmodel";
import { Product } from "../types";

interface ProductsHomeProps {
  data: Product[];
}

export default function Products({ data }: ProductsHomeProps) {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      className={`
        box grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
        gap-6 px-4 sm:px-6 lg:px-9 mt-[40px] pb-16 mb-20
        transition-all duration-700 ease-out
        ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
      `}
    >
      {data.map((item) => (
        <ProductModel
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          description={item.description}
          category={item.category || "general"}
        />
      ))}
    </div>
  );
}