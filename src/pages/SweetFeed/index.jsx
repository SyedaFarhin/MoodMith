import React from "react";
import { motion } from "framer-motion";

const posts = [
  "Today I’m grateful for… 🌸",
  "My buddy in Canada sent me sunshine ☀️",
  "I showed up for myself today 🤍",
  "Small wins still count ✨",
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function SweetFeed() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h4 className="text-pink-500 font-semibold mb-3 tracking-wide">
            Sweet Feed
          </h4>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            The Sweetest Community <br /> on the Internet.
          </h1>

          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto md:mx-0">
            No filters. No flexing. Just gratitude, growth, and gentle reminders
            that you’re not alone.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition"
          >
            Join the Sweet Side 🍬
          </motion.button>
        </motion.div>

        {/* RIGHT POSTS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {posts.map((post, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              <p className="text-gray-700 text-base">{post}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
