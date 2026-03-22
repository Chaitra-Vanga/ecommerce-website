// Cart Page - shows all items in the shopping cart
import { Link } from "react-router-dom";
import { Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Cart = () => {
  const { cartItems, removeFromCart, getCartTotal } = useCart();

  // Handle removing item from cart
  const handleRemove = (productId: string, name: string) => {
    removeFromCart(productId);
    toast.info(`${name} removed from cart`);
  };

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center">
        <ShoppingBag className="mb-4 h-16 w-16 text-muted-foreground/40" />
        <h2 className="font-heading text-2xl font-bold text-foreground">
          Your cart is empty
        </h2>
        <p className="mt-2 text-muted-foreground">
          Add some products to get started!
        </p>
        <Link to="/">
          <Button className="mt-6">Browse Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back link */}
      <Link to="/" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        Continue shopping
      </Link>

      <h1 className="mb-6 font-heading text-3xl font-bold text-foreground">
        Shopping Cart
      </h1>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Cart items list */}
        <div className="space-y-4 lg:col-span-2">
          {cartItems.map((item) => (
            <div
              key={item.product.id}
              className="flex gap-4 rounded-lg border bg-card p-4"
            >
              {/* Item image */}
              <img
                src={item.product.image}
                alt={item.product.name}
                className="h-24 w-24 rounded-md object-cover"
              />

              {/* Item details */}
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="font-heading font-semibold text-card-foreground">
                    {item.product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Qty: {item.quantity}
                  </p>
                </div>
                <p className="font-heading font-bold text-primary">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>

              {/* Remove button */}
              <Button
                variant="ghost"
                size="icon"
                className="self-start text-muted-foreground hover:text-destructive"
                onClick={() => handleRemove(item.product.id, item.product.name)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Order summary */}
        <div className="h-fit rounded-lg border bg-card p-6">
          <h2 className="font-heading text-xl font-bold text-card-foreground">
            Order Summary
          </h2>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Subtotal</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t pt-2">
              <div className="flex justify-between font-heading text-lg font-bold text-card-foreground">
                <span>Total</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
          <Button className="mt-6 w-full" size="lg">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
