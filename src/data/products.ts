// Sample product data - simulates what would come from MongoDB
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    description: "Feature-packed smartwatch with heart rate monitoring, GPS tracking, and water resistance up to 50 meters.",
  },
  {
    id: "3",
    name: "Laptop Backpack",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    description: "Durable laptop backpack with multiple compartments, USB charging port, and anti-theft design.",
  },
  {
    id: "4",
    name: "Desk Lamp",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Modern LED desk lamp with adjustable brightness, color temperature control, and sleek minimalist design.",
  },
  {
    id: "5",
    name: "Coffee Mug Set",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
    description: "Set of 4 ceramic coffee mugs in earthy tones. Microwave and dishwasher safe.",
  },
  {
    id: "6",
    name: "Portable Speaker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    description: "Compact Bluetooth speaker with 360° sound, waterproof design, and 12-hour playtime.",
  },
];
