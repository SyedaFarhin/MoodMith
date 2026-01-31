import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import ProductCard from '../../components/ProductCard';

const Products = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample product data - in a real app, this would come from an API
  const products = [
    {
      id: 1,
      name: 'Abundance Box',
      price: 89.99,
      image: '/api/placeholder/300/300',
      category: 'abundance',
      description: 'Curated items to attract prosperity and success',
      mood: '💎'
    },
    {
      id: 2,
      name: 'Calm Box',
      price: 79.99,
      image: '/api/placeholder/300/300',
      category: 'calm',
      description: 'Peaceful essentials for tranquility and relaxation',
      mood: '☁️'
    },
    {
      id: 3,
      name: 'Love Box',
      price: 99.99,
      image: '/api/placeholder/300/300',
      category: 'love',
      description: 'Heart-opening items for self-love and connection',
      mood: '💖'
    },
    {
      id: 4,
      name: 'Gratitude Box',
      price: 69.99,
      image: '/api/placeholder/300/300',
      category: 'gratitude',
      description: 'Daily reminders to practice thankfulness',
      mood: '🙏'
    },
    {
      id: 5,
      name: 'Home Harmony Box',
      price: 119.99,
      image: '/api/placeholder/300/300',
      category: 'home',
      description: 'Create sacred space in your home',
      mood: '🏡'
    },
    {
      id: 6,
      name: 'Main Character Glow',
      price: 94.99,
      image: '/api/placeholder/300/300',
      category: 'abundance',
      description: 'Step into your spotlight with confidence',
      mood: '💞'
    },
    {
      id: 7,
      name: 'Peace Please',
      price: 74.99,
      image: '/api/placeholder/300/300',
      category: 'calm',
      description: 'Serenity in a box for chaotic days',
      mood: '☁️'
    },
    {
      id: 8,
      name: 'Heart-Full',
      price: 84.99,
      image: '/api/placeholder/300/300',
      category: 'love',
      description: 'Overflow with love and compassion',
      mood: '💖'
    },
    {
      id: 9,
      name: 'Reignite',
      price: 89.99,
      image: '/api/placeholder/300/300',
      category: 'abundance',
      description: 'Spark your inner fire and passion',
      mood: '🔥'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', emoji: '🌟' },
    { id: 'abundance', name: 'Abundance', emoji: '💎' },
    { id: 'calm', name: 'Calm', emoji: '☁️' },
    { id: 'love', name: 'Love', emoji: '💖' },
    { id: 'gratitude', name: 'Gratitude', emoji: '🙏' },
    { id: 'home', name: 'Home Harmony', emoji: '🏡' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              All Mood Boxes
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Choose your perfect mood box curated just for you
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                <span className="mr-2">{category.emoji}</span>
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                addToCart={addToCart}
              />
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-600">No products found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
