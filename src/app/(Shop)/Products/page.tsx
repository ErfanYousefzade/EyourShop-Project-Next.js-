
import Products from "../../../../components/Products";
import { Product } from "../../../../types";


// ✅ این تابع جای useEffect و fetch رو می‌گیره
async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: {
      revalidate: 60, // ISR: هر 60 ثانیه آپدیت میشه
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

// ✅ این کامپوننت جای ProductsHome قبلی رو می‌گیره
export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Our Products</h1>
      <Products data={products} />
    </div>
  );
}

// ✅ متادیتا برای SEO
export const metadata = {
  title: "Products | My Store",
  description: "Browse our amazing products",
};