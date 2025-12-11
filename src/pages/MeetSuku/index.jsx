import React, { useState } from "react";
import { motion } from "framer-motion";

const moods = ["Calm", "Stressed", "Happy", "Blah"];

const recommendations = {
  Calm: [
    { type: "Product", title: "Soothing Aroma Kit" },
    { type: "Meditation", title: "5-min Calm Breath" },
    { type: "Community", title: "Serenity Circle" },
  ],
  Stressed: [
    { type: "Product", title: "Stress Relief Box" },
    { type: "Meditation", title: "Quick Reset Session" },
    { type: "Community", title: "Support Lounge" },
  ],
  Happy: [
    { type: "Product", title: "Happy Vibes Box" },
    { type: "Meditation", title: "Gratitude Flow" },
    { type: "Community", title: "Joy Tribe" },
  ],
  Blah: [
    { type: "Product", title: "Mood Booster Pack" },
    { type: "Meditation", title: "Mood Reset Audio" },
    { type: "Community", title: "Energy Club" },
  ],
};

const MeetSuku = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-yellow-50 to-orange-100 flex flex-col items-center px-4 py-10">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        MEET SUKU
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        “Hey there, how’s your vibe today?”
      </p>

      {/* SUKU Avatar with Glow Animation */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="w-40 h-40 rounded-full bg-white shadow-2xl mb-8 flex items-center justify-center border-4 border-yellow-300 relative"
      >
        <div className="absolute inset-0 rounded-full bg-yellow-300 opacity-30 blur-xl animate-pulse"></div>
        <img
          src="/suku.png"
          alt="SUKU"
          className="w-38 h-28 z-10"
        />
      </motion.div>

      {/* Mood Buttons */}
      <div className="grid grid-cols-2 md:flex gap-4 mb-10">
        {moods.map((mood) => (
          <motion.button
            key={mood}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedMood(mood)}
            className="px-6 py-3 rounded-xl font-semibold shadow-md bg-white hover:bg-yellow-200 transition"
          >
            {mood}
          </motion.button>
        ))}
      </div>

      {/* Carousel */}
      {selectedMood && (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="w-full max-w-5xl mb-12"
  >
    <h2 className="text-3xl font-semibold text-gray-700 mb-5">
      Your {selectedMood} Recommendations
    </h2>

    <div className="flex space-x-6 overflow-x-auto pb-6">
      {recommendations[selectedMood].map((item, index) => (
        <div
          key={index}
          className="min-w-[260px] md:min-w-[300px] bg-white shadow-xl rounded-2xl p-8 flex flex-col gap-4 transform hover:scale-105 transition"
        >
          <p className="text-base font-bold text-gray-500">{item.type}</p>

          <h3 className="text-xl font-semibold text-gray-700 leading-snug">
            {item.title}
          </h3>

          <button className="px-4 py-3 mt-2 bg-yellow-300 rounded-lg text-md text-gray-700 font-semibold hover:bg-yellow-400 transition">
            Explore
          </button>
        </div>
      ))}
    </div>
  </motion.div>
)}

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.94 }}
        className="px-8 py-4 bg-yellow-500 text-gray-900 rounded-2xl text-lg font-bold shadow-xl hover:bg-yellow-600 transition"
      >
        Create My Mood Profile
      </motion.button>
    </div>
  );
};

export default MeetSuku;
