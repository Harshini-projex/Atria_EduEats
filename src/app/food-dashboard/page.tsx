'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'veg' | 'non-veg' | 'beverage';
}

const menuItems: MenuItem[] = [
  // Veg Items
  {
    id: 1,
    name: "Paneer Butter Masala",
    price: 180,
    description: "Rich and creamy paneer curry",
    image: "/images/paneer-butter-masala.jpg",
    category: "veg"
  },
  {
    id: 2,
    name: "Veg Biryani",
    price: 160,
    description: "Fragrant rice with mixed vegetables",
    image: "/images/veg-biryani.jpg",
    category: "veg"
  },
  {
    id: 3,
    name: "Dal Makhani",
    price: 140,
    description: "Creamy black lentils",
    image: "/images/dal-makhani.jpg",
    category: "veg"
  },
  {
    id: 4,
    name: "Veg Pulao",
    price: 130,
    description: "Mildly spiced rice with vegetables",
    image: "/images/veg-pulao.jpg",
    category: "veg"
  },
  {
    id: 5,
    name: "Palak Paneer",
    price: 170,
    description: "Spinach curry with cottage cheese",
    image: "/images/palak-paneer.jpg",
    category: "veg"
  },
  {
    id: 6,
    name: "Veg Manchurian",
    price: 150,
    description: "Indo-Chinese vegetable dumplings",
    image: "/images/veg-manchurian.jpg",
    category: "veg"
  },
  // Non-Veg Items
  {
    id: 7,
    name: "Chicken Biryani",
    price: 200,
    description: "Aromatic rice with tender chicken",
    image: "/images/chicken-biryani.jpg",
    category: "non-veg"
  },
  {
    id: 8,
    name: "Butter Chicken",
    price: 220,
    description: "Creamy tomato chicken curry",
    image: "/images/butter-chicken.jpg",
    category: "non-veg"
  },
  {
    id: 9,
    name: "Fish Curry",
    price: 190,
    description: "Spicy fish in coconut gravy",
    image: "/images/fish-curry.jpg",
    category: "non-veg"
  },
  {
    id: 10,
    name: "Chicken 65",
    price: 180,
    description: "Spicy fried chicken",
    image: "/images/chicken-65.jpg",
    category: "non-veg"
  },
  {
    id: 11,
    name: "Mutton Curry",
    price: 240,
    description: "Traditional spicy mutton curry",
    image: "/images/mutton-curry.jpg",
    category: "non-veg"
  },
  {
    id: 12,
    name: "Chicken Tikka",
    price: 210,
    description: "Grilled marinated chicken pieces",
    image: "/images/chicken-tikka.jpg",
    category: "non-veg"
  },
  // Beverages
  {
    id: 13,
    name: "Masala Chai",
    price: 30,
    description: "Indian spiced tea",
    image: "/images/masala-chai.jpg",
    category: "beverage"
  },
  {
    id: 14,
    name: "Cold Coffee",
    price: 70,
    description: "Chilled coffee with ice cream",
    image: "/images/cold-coffee.jpg",
    category: "beverage"
  },
  {
    id: 15,
    name: "Fresh Lime Soda",
    price: 40,
    description: "Refreshing lime-based drink",
    image: "/images/lime-soda.jpg",
    category: "beverage"
  },
  {
    id: 16,
    name: "Mango Lassi",
    price: 60,
    description: "Sweet mango yogurt smoothie",
    image: "/images/mango-lassi.jpg",
    category: "beverage"
  },
  {
    id: 17,
    name: "Buttermilk",
    price: 35,
    description: "Spiced yogurt-based drink",
    image: "/images/buttermilk.jpg",
    category: "beverage"
  },
  {
    id: 18,
    name: "Green Tea",
    price: 40,
    description: "Healthy herbal tea",
    image: "/images/green-tea.jpg",
    category: "beverage"
  },
  {
    id: 19,
    name: "Fresh Orange Juice",
    price: 50,
    description: "Freshly squeezed orange juice",
    image: "/images/orange-juice.jpg",
    category: "beverage"
  },
  {
    id: 20,
    name: "Chocolate Shake",
    price: 80,
    description: "Rich chocolate milkshake",
    image: "/images/chocolate-shake.jpg",
    category: "beverage"
  }
];

export default function FoodDashboard() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [showQR, setShowQR] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const addToOrder = (itemId: number) => {
    setSelectedItems([...selectedItems, itemId]);
  };

  const removeFromOrder = (itemId: number) => {
    setSelectedItems(selectedItems.filter(id => id !== itemId));
  };

  const handleOrder = () => {
    setShowQR(true);
  };

  const handlePayment = () => {
    setShowQR(false);
    setOrderSuccess(true);
    setSelectedItems([]);
    setTimeout(() => setOrderSuccess(false), 3000);
  };

  const getTotalAmount = () => {
    return selectedItems.reduce((total, itemId) => {
      const item = menuItems.find(item => item.id === itemId);
      return total + (item?.price || 0);
    }, 0);
  };

  const renderMenuItem = (item: MenuItem) => (
    <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={item.image}
          alt={item.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <span className="text-green-600 font-bold">₹{item.price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        {selectedItems.includes(item.id) ? (
          <button
            onClick={() => removeFromOrder(item.id)}
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors"
          >
            Remove from Order
          </button>
        ) : (
          <button
            onClick={() => addToOrder(item.id)}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors"
          >
            Add to Order
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen relative">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://marketplace.canva.com/EAFr2dN220M/1/0/800w/canva-32K1vHPQAHw.mp4" type="video/mp4" />
      </video>

      {/* Overlay to make content more readable */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20">
        <nav className="bg-white bg-opacity-90 shadow-sm backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-xl font-bold">Food Menu</h1>
                </div>
              </div>
              <div className="flex items-center">
                <Link
                  href="/dashboard-select"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Back to Dashboard Selection
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Order Success Message */}
          {orderSuccess && (
            <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg z-50">
              Order placed successfully!
            </div>
          )}

          {/* QR Code Modal */}
          {showQR && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Scan to Pay</h2>
                <div className="bg-gray-200 w-64 h-64 mb-4 flex items-center justify-center">
                  <p className="text-gray-600">QR Code Placeholder</p>
                </div>
                <button
                  onClick={handlePayment}
                  className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                >
                  Complete Payment
                </button>
              </div>
            </div>
          )}

          {/* Menu Sections */}
          <div className="space-y-8">
            {/* Veg Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-400">Vegetarian</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.filter(item => item.category === 'veg').map(item => (
                  <div key={item.id} className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    {renderMenuItem(item)}
                  </div>
                ))}
              </div>
            </section>

            {/* Non-Veg Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-red-400">Non-Vegetarian</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.filter(item => item.category === 'non-veg').map(item => (
                  <div key={item.id} className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    {renderMenuItem(item)}
                  </div>
                ))}
              </div>
            </section>

            {/* Beverages Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Beverages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.filter(item => item.category === 'beverage').map(item => (
                  <div key={item.id} className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    {renderMenuItem(item)}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Order Summary */}
          {selectedItems.length > 0 && (
            <div className="fixed bottom-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm shadow-lg p-4">
              <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div>
                  <span className="font-bold">Selected Items: {selectedItems.length}</span>
                  <span className="ml-4 font-bold">Total: ₹{getTotalAmount()}</span>
                </div>
                <button
                  onClick={handleOrder}
                  className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
                >
                  Place Order
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
} 