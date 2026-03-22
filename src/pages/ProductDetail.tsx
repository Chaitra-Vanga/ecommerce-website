// Product Detail Page - shows full details of a single product
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ProductDetail = () => {
  // Get the product ID from the URL
  const { id } = useParams<{ id: string }>();

  // Find the product by ID
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  // Show error if product not found
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="font-heading text-2xl font-bold text-foreground">Product not found</h2>
        <Link to="/" className="mt-4 inline-block text-primary hover:underline">
          ← Back to products
        </Link>
      </div>
    );
  }

  // Handle add to cart
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back button */}
      <Link to="/" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        Back to products
      </Link>

      {/* Product detail layout */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Product image */}
        <div className="overflow-hidden rounded-lg border bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Product info */}
        <div className="flex flex-col justify-center">
          <h1 className="font-heading text-3xl font-bold text-foreground">
            {product.name}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {product.description}
          </p>
          <p className="mt-6 font-heading text-3xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </p>

          <Button className="mt-6 w-full md:w-auto" size="lg" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
