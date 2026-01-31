import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Heart, Sparkles } from 'lucide-react';

const OrderSuccess = () => {
  const orderNumber = `MM${Date.now().toString().slice(-6)}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>

          {/* Success Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Order Confirmed! 🎉
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-600 mb-8"
          >
            Thank you for choosing MoodMithAI! Your mood boxes are on their way to brighten your day.
          </motion.p>

          {/* Order Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-8"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Package className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-600">Order Number</span>
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-2">
              {orderNumber}
            </div>
            <p className="text-sm text-gray-600">
              A confirmation email has been sent to your registered email address.
            </p>
          </motion.div>

          {/* What's Next */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">What's Next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Package className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-medium text-gray-800 mb-1">Processing</h4>
                <p className="text-sm text-gray-600">Your order is being prepared with care</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Sparkles className="w-6 h-6 text-pink-600" />
                </div>
                <h4 className="font-medium text-gray-800 mb-1">Shipping</h4>
                <p className="text-sm text-gray-600">Expected delivery in 3-5 business days</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Heart className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-medium text-gray-800 mb-1">Enjoy</h4>
                <p className="text-sm text-gray-600">Unbox your mood transformation!</p>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/products"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors"
            >
              Continue Shopping
            </Link>
            <Link
              to="/"
              className="px-8 py-3 border border-purple-300 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Back to Home
            </Link>
          </motion.div>

          {/* Thank You Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 pt-8 border-t border-gray-200"
          >
            <p className="text-sm text-gray-600">
              With love and positive vibes from the MoodMithAI team 💜
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderSuccess;
