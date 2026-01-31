import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartIcon = () => {
  const { itemCount, openCart } = useCart();

  return (
    <motion.button
      onClick={openCart}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
    >
      <ShoppingBag className="w-6 h-6 text-purple-600" />
      
      {/* Badge for item count */}
      {itemCount > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
        >
          {itemCount > 99 ? '99+' : itemCount}
        </motion.div>
      )}
    </motion.button>
  );
};

export default CartIcon;
