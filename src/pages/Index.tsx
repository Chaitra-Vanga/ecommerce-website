// Home Page - displays all products in a grid
import { useState, useEffect } from "react";
import { products, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Index = () => {
  // State to store products (simulates fetching from API)
  const [productList, setProductList] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect runs once when page loads - simulates API call
  useEffect(() => {
    // Simulate a short loading delay like a real API
    const timer = setTimeout(() => {
      setProductList(products);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page header */}
      <div className="mb-8 text-center">
        <h1 className="font-heading text-4xl font-bold text-foreground">
          Our Products
        </h1>
        <p className="mt-2 text-muted-foreground">
          Browse our collection of quality items
        </p>
      </div>

      {/* Loading state */}
      {loading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-80 animate-pulse rounded-lg bg-muted" />
          ))}
        </div>
      ) : (
        /* Product grid */
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;
