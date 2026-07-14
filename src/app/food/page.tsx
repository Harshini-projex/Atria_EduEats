'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import AnimatedCard from '@/components/AnimatedCard'
import { ShoppingCartIcon, FireIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

interface MenuItem {
  id: number
  name: string
  price: number
  description: string
  category: 'veg' | 'nonVeg' | 'beverages'
  image: string
  rating: number
  preparationTime: string
  isSpicy?: boolean
  isPopular?: boolean
}

const menuItems: { [key: string]: MenuItem[] } = {
  veg: [
    { 
      id: 1, 
      name: 'Paneer Butter Masala', 
      price: 120, 
      description: 'Rich and creamy paneer curry with butter and tomato gravy',
      category: 'veg',
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
      rating: 4.5,
      preparationTime: '15-20 mins',
      isPopular: true
    },
    { 
      id: 2, 
      name: 'Veg Biryani', 
      price: 150, 
      description: 'Fragrant basmati rice with mixed vegetables and aromatic spices',
      category: 'veg',
      image: 'https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg',
      rating: 4.3,
      preparationTime: '20-25 mins',
      isSpicy: true
    },
    { 
      id: 3, 
      name: 'Dal Makhani', 
      price: 100, 
      description: 'Creamy black lentils cooked overnight with butter and spices',
      category: 'veg',
      image: 'https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg',
      rating: 4.4,
      preparationTime: '15-20 mins'
    },
    {
      id: 4,
      name: 'Mushroom Masala',
      price: 110,
      description: 'Fresh mushrooms in a rich, spiced onion-tomato gravy',
      category: 'veg',
      image: 'https://images.pexels.com/photos/262947/pexels-photo-262947.jpeg',
      rating: 4.2,
      preparationTime: '15-20 mins'
    },
    {
      id: 5,
      name: 'Veg Manchurian',
      price: 130,
      description: 'Indo-Chinese style vegetable balls in spicy sauce',
      category: 'veg',
      image: 'https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg',
      rating: 4.6,
      preparationTime: '20-25 mins',
      isPopular: true,
      isSpicy: true
    },
    {
      id: 6,
      name: 'Masala Dosa',
      price: 80,
      description: 'Crispy rice crepe with spiced potato filling',
      category: 'veg',
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
      rating: 4.7,
      preparationTime: '15-20 mins',
      isPopular: true
    },
    {
      id: 7,
      name: 'Palak Paneer',
      price: 130,
      description: 'Cottage cheese cubes in creamy spinach gravy',
      category: 'veg',
      image: 'https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg',
      rating: 4.3,
      preparationTime: '15-20 mins'
    },
    {
      id: 8,
      name: 'Veg Noodles',
      price: 90,
      description: 'Stir-fried noodles with mixed vegetables',
      category: 'veg',
      image: 'https://images.pexels.com/photos/1087906/pexels-photo-1087906.jpeg',
      rating: 4.1,
      preparationTime: '10-15 mins'
    },
    {
      id: 9,
      name: 'Veg Pizza',
      price: 180,
      description: 'Fresh pizza with bell peppers, onions, and mushrooms',
      category: 'veg',
      image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg',
      rating: 4.5,
      preparationTime: '20-25 mins',
      isPopular: true
    },
    {
      id: 10,
      name: 'Veg Thali',
      price: 200,
      description: 'Complete meal with rice, rotis, dal, and three vegetables',
      category: 'veg',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
      rating: 4.8,
      preparationTime: '20-25 mins',
      isPopular: true
    }
  ],
  nonVeg: [
    { 
      id: 11, 
      name: 'Chicken Biryani', 
      price: 180, 
      description: 'Aromatic rice with tender chicken and special spices',
      category: 'nonVeg',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg',
      rating: 4.7,
      preparationTime: '25-30 mins',
      isPopular: true,
      isSpicy: true
    },
    { 
      id: 12, 
      name: 'Butter Chicken', 
      price: 160, 
      description: 'Tender chicken in rich tomato-butter gravy',
      category: 'nonVeg',
      image: 'https://images.pexels.com/photos/2611917/pexels-photo-2611917.jpeg',
      rating: 4.6,
      preparationTime: '20-25 mins',
      isPopular: true
    },
    { 
      id: 13, 
      name: 'Fish Curry', 
      price: 140, 
      description: 'Fresh fish in tangy curry sauce',
      category: 'nonVeg',
      image: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg',
      rating: 4.2,
      preparationTime: '20-25 mins',
      isSpicy: true
    },
    {
      id: 14,
      name: 'Chicken 65',
      price: 150,
      description: 'Spicy deep-fried chicken with curry leaves',
      category: 'nonVeg',
      image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg',
      rating: 4.5,
      preparationTime: '15-20 mins',
      isSpicy: true
    },
    {
      id: 15,
      name: 'Mutton Curry',
      price: 220,
      description: 'Tender mutton pieces in rich spicy gravy',
      category: 'nonVeg',
      image: 'https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg',
      rating: 4.6,
      preparationTime: '30-35 mins',
      isSpicy: true,
      isPopular: true
    },
    {
      id: 16,
      name: 'Chicken Noodles',
      price: 120,
      description: 'Stir-fried noodles with chicken and vegetables',
      category: 'nonVeg',
      image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg',
      rating: 4.3,
      preparationTime: '15-20 mins'
    },
    {
      id: 17,
      name: 'Prawn Masala',
      price: 190,
      description: 'Prawns cooked in spicy onion-tomato gravy',
      category: 'nonVeg',
      image: 'https://images.pexels.com/photos/3338498/pexels-photo-3338498.jpeg',
      rating: 4.4,
      preparationTime: '20-25 mins',
      isSpicy: true
    },
    {
      id: 18,
      name: 'Chicken Pizza',
      price: 220,
      description: 'Pizza topped with chicken, bell peppers, and onions',
      category: 'nonVeg',
      image: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg',
      rating: 4.5,
      preparationTime: '20-25 mins',
      isPopular: true
    },
    {
      id: 19,
      name: 'Non-Veg Thali',
      price: 250,
      description: 'Complete meal with chicken curry, rice, rotis, and sides',
      category: 'nonVeg',
      image: 'https://images.pexels.com/photos/958547/pexels-photo-958547.jpeg',
      rating: 4.7,
      preparationTime: '25-30 mins',
      isPopular: true
    },
    {
      id: 20,
      name: 'Tandoori Chicken',
      price: 280,
      description: 'Whole chicken marinated and cooked in tandoor',
      category: 'nonVeg',
      image: 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg',
      rating: 4.8,
      preparationTime: '30-35 mins',
      isPopular: true
    }
  ],
  beverages: [
    {
      id: 21,
      name: 'Masala Chai',
      price: 30,
      description: 'Traditional Indian spiced tea with milk',
      category: 'veg',
      image: 'https://images.pexels.com/photos/1793034/pexels-photo-1793034.jpeg',
      rating: 4.6,
      preparationTime: '5-10 mins',
      isPopular: true
    },
    {
      id: 22,
      name: 'Cold Coffee',
      price: 80,
      description: 'Chilled coffee blend with ice cream',
      category: 'veg',
      image: 'https://images.pexels.com/photos/2074122/pexels-photo-2074122.jpeg',
      rating: 4.5,
      preparationTime: '5-10 mins',
      isPopular: true
    },
    {
      id: 23,
      name: 'Fresh Lime Soda',
      price: 40,
      description: 'Refreshing lime soda with mint leaves',
      category: 'veg',
      image: 'https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg',
      rating: 4.3,
      preparationTime: '5 mins'
    },
    {
      id: 24,
      name: 'Mango Lassi',
      price: 60,
      description: 'Creamy mango yogurt smoothie',
      category: 'veg',
      image: 'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg',
      rating: 4.7,
      preparationTime: '5-10 mins',
      isPopular: true
    },
    {
      id: 25,
      name: 'Fresh Orange Juice',
      price: 50,
      description: 'Freshly squeezed orange juice',
      category: 'veg',
      image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg',
      rating: 4.4,
      preparationTime: '5 mins'
    }
  ]
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  }
}

export default function FoodDashboard() {
  const [cart, setCart] = useState<MenuItem[]>([])
  const [showQR, setShowQR] = useState(false)
  const [activeTab, setActiveTab] = useState<'veg' | 'nonVeg' | 'beverages'>('veg')
  const [showOrderSuccess, setShowOrderSuccess] = useState(false)
  const router = useRouter()

  const addToCart = (item: MenuItem) => {
    setCart([...cart, item])
  }

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price, 0)
  }

  const handleCheckout = () => {
    setShowQR(true)
  }

  const handleOrderComplete = () => {
    setShowQR(false)
    setCart([])
    setShowOrderSuccess(true)
    setTimeout(() => setShowOrderSuccess(false), 3000)
  }

  return (
    <motion.div 
      className="min-h-screen p-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Navigation Bar */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Food Ordering</h1>
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
            onClick={() => router.push('/dashboard-select')}
          >
            Switch Dashboard
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            onClick={() => router.push('/')}
          >
            Logout
          </motion.button>
        </div>
      </div>

      {/* Menu Tabs */}
      <div className="flex mb-6 space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-3 rounded-full font-semibold ${
            activeTab === 'veg' 
              ? 'bg-green-500 text-white shadow-lg' 
              : 'bg-gray-100 text-gray-700'
          }`}
          onClick={() => setActiveTab('veg')}
        >
          Vegetarian
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-3 rounded-full font-semibold ${
            activeTab === 'nonVeg' 
              ? 'bg-red-500 text-white shadow-lg' 
              : 'bg-gray-100 text-gray-700'
          }`}
          onClick={() => setActiveTab('nonVeg')}
        >
          Non-Vegetarian
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-3 rounded-full font-semibold ${
            activeTab === 'beverages' 
              ? 'bg-blue-500 text-white shadow-lg' 
              : 'bg-gray-100 text-gray-700'
          }`}
          onClick={() => setActiveTab('beverages')}
        >
          Beverages
        </motion.button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Menu Items */}
        <motion.div className="md:col-span-2" variants={itemVariants}>
          <div className="grid md:grid-cols-2 gap-4">
            {menuItems[activeTab].map((item) => (
              <AnimatedCard
                key={item.id}
                className="relative overflow-hidden"
              >
                <div className="relative h-48 w-full mb-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-t-lg"
                    priority={item.isPopular}
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  {item.isPopular && (
                    <SparklesIcon className="h-5 w-5 text-yellow-500" />
                  )}
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <span className="mr-2">⭐ {item.rating}</span>
                  <span className="mr-2">•</span>
                  <span>{item.preparationTime}</span>
                  {item.isSpicy && (
                    <>
                      <span className="mx-2">•</span>
                      <FireIcon className="h-4 w-4 text-red-500" />
                    </>
                  )}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-lg">₹{item.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </motion.div>

        {/* Cart and Payment */}
        <motion.div variants={itemVariants}>
          <div className="bg-white p-6 rounded-lg shadow-lg h-fit sticky top-4">
            <div className="flex items-center mb-4">
              <ShoppingCartIcon className="h-6 w-6 text-blue-500 mr-2" />
              <h2 className="text-2xl font-bold">Your Order</h2>
            </div>
            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-3 mb-4">
                  {cart.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex justify-between py-2 border-b"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div className="flex items-center">
                        <div className="relative h-12 w-12 mr-2">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover rounded-sm"
                          />
                        </div>
                        <span>{item.name}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-4">₹{item.price}</span>
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => removeFromCart(index)}
                        >
                          ✕
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 font-bold text-lg">
                  Total: ₹{getTotalAmount()}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  onClick={handleCheckout}
                >
                  Proceed to Payment
                </motion.button>
              </>
            )}
          </div>
        </motion.div>
      </div>

      {/* QR Code Payment Modal */}
      {showQR && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-8 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">Scan to Pay</h3>
            <QRCodeSVG value={`upi://pay?pa=merchant@upi&pn=EduEats&am=${getTotalAmount()}&cu=INR`} />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={handleOrderComplete}
            >
              Complete Order
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      {/* Order Success Toast */}
      {showOrderSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
        >
          Order placed successfully! 🎉
        </motion.div>
      )}
    </motion.div>
  )
} 