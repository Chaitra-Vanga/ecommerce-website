// Product Card component - displays a single product in the grid
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  // Handle adding product to cart
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block animate-fade-in overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-lg"
    >
      {/* Product image */}
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product info */}
      <div className="p-4">
        <h3 className="font-heading text-lg font-semibold text-card-foreground">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="font-heading text-xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          <Button size="sm" onClick={handleAddToCart}>
            <ShoppingCart className="mr-1 h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
