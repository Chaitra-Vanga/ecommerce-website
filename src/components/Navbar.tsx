// Navigation bar component - shown on every page
import { Link } from "react-router-dom";
import { ShoppingCart, Store } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  // Get cart count from context to show badge
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo / Brand name */}
        <Link to="/" className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
          <Store className="h-6 w-6 text-primary" />
          ShopEase
        </Link>

        {/* Navigation links */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Products
          </Link>

          {/* Cart link with item count badge */}
          <Link to="/cart" className="relative flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
