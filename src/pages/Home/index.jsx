import React from "react";
import { motion } from 'framer-motion';

import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AddsBannerSlider from "../../components/AddsBannerSlider";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductsSlider from "../../components/ProductsSlider";
import BlogItem from "../../components/BlogItem";
import Footer from "../../components/Footer";
import HomeBannerV2 from "../../components/HomeBannerV2";
import BannerBoxV2 from "../../components/BannerBoxV2";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  // const [value, setValue] = React.useState(0);
  const moods = ['Abundance', 'Calm', 'Love', 'Gratitude', 'Home Harmony'];
  const moodBoxes = [
    { emoji: '💎', name: 'Abundance Activated', color: 'from-yellow-400 to-orange-500' },
    { emoji: '💞', name: 'Main Character Glow', color: 'from-pink-400 to-rose-500' },
    { emoji: '☁️', name: 'Peace Please', color: 'from-blue-300 to-cyan-500' },
    { emoji: '💖', name: 'Heart-Full', color: 'from-red-400 to-pink-500' },
    { emoji: '🔥', name: 'Reignite', color: 'from-orange-500 to-red-600' },
    { emoji: '🏡', name: 'Home Harmony', color: 'from-green-400 to-emerald-500' },
  ];
  const features = [
    { icon: '✨', title: 'Daily Affirmations' },
    { icon: '🗺️', title: 'AI Mood Mapping' },
    { icon: '🛍️', title: 'Personalized Shopping' },
    { icon: '💡', title: 'Wellness Prompts' },
    { icon: '📊', title: 'Mood Analytics' },
  ];
  const features2 = [
    { icon: '🧘‍♀️', title: 'Yoga Sessions', desc: 'Listen to your energy' },
    { icon: '🎧', title: 'Guided Meditation', desc: 'Move with your mood' },
    { icon: '🪷', title: 'Live Classes', desc: 'Join anytime, anywhere' },
    { icon: '💫', title: 'Mood Coaching', desc: 'Personalized wellness' },
  ];
  const posts = [
    { emoji: '🙏', text: 'Grateful for this community', user: 'Sarah M.' },
    { emoji: '💛', text: 'My Calm Box arrived! So needed this.', user: 'Alex K.' },
    { emoji: '🌱', text: 'Growing every day with SUKU', user: 'Maya R.' },
    { emoji: '✨', text: 'Feeling the magic already', user: 'Jordan L.' },
  ];
  const steps = [
    { number: '1', title: 'Pick your vibe', emoji: '🎯', desc: 'Tell us how you feel right now' },
    { number: '2', title: 'SUKU curates your experience', emoji: '🤖', desc: 'AI matches your mood perfectly' },
    { number: '3', title: 'Sweeten your mood', emoji: '✨', desc: 'Enjoy personalized content & products' },
  ];
  const pillars = [
    { title: 'Emotion → Connection', desc: 'Feel understood' },
    { title: 'Connection → Community', desc: 'Find your tribe' },
    { title: 'Community → Growth', desc: 'Grow together' },
  ];
  const testimonials = [
    {
      quote: "My Calm Box changed my evenings.",
      author: "Priya S.",
      location: "Mumbai",
      emoji: "☁️"
    },
    {
      quote: "SUKU feels like a friend who actually listens.",
      author: "Marcus T.",
      location: "New York",
      emoji: "🤖"
    },
    {
      quote: "My Mood Buddy from Dubai is now my accountability partner.",
      author: "Aisha K.",
      location: "London",
      emoji: "🌍"
    },
    {
      quote: "Finally, shopping that understands my feelings.",
      author: "David L.",
      location: "San Francisco",
      emoji: "🛍️"
    },
    {
      quote: "The Sweet Feed community is so supportive and real.",
      author: "Emma R.",
      location: "Sydney",
      emoji: "💖"
    },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
     {/* <HomeSlider/>
     <section className="py-6">
      <div className="container flex gap-5 items-center">
        <div className="part1 w-[65%]">
      <HomeBannerV2/>
          
        </div>

        <div className="part2 w-[30%] gap-5 flex items-center justify-between flex-col">
  <BannerBoxV2 info="right" image={"https://serviceapi.spicezgold.com/download/1760160666204_1737020916820_New_Project_52.jpg"}/>
  <BannerBoxV2 info="right" image={"https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg"}/>
</div>

      </div> 

      

     </section>

     <HomeCatSlider/>

     <section className="bg-[ #dca48f33] py-8">
  <div className="container">
    <div className="flex items-center justify-between">
      <div className="leftSec">
        <h2 className="text-[25px] font-[600]" style={{color:" #2f5641"}}>Popular Products</h2>
        <p className="text-[19px] font-[500]" style={{color:" #9b6247"}}>
          Do not miss the current offers until the end of March
        </p>
      </div>

      <div className="rightSec w-[60%]">
      <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Fashion" />
        <Tab label="Electronics" />
        <Tab label="Bag" />
        <Tab label="Watches" />
        <Tab label="Footwear" />
        <Tab label="Beauty" />
        <Tab label="Wellness" />
      </Tabs>
      </Box>

     
</div>
    </div>

    <ProductsSlider items={4}/>


  </div>

  
</section>

     <section className="py-5 bg-[ #dca48f33]">
  <div className="container">
    <div className="freeShipping w-[80%] m-auto py-2 p-4 mb-20 border border-[#ff5252] flex items-center justify-between rounded-md">
      <div className="col1 flex items-center gap-4">
      <LiaShippingFastSolid className="text-[50px] " style={{color:" #2f5641"}}/>
      <span className="text-[20px] font-[600]" style={{color:" #2f5641"}}>Free Shipping</span>
      </div>

      <div className="col2">
        <p className="mb-0 font-[500] text-[18px]"  style={{color:" #9b6247"}}>Free Delivery Now On Your First Order and over $200</p>
      </div>

      <p className="font-bold text-[25px]" style={{color:" #2f5641"}}>- Only $200*</p>
    </div>
<AddsBannerSlider items={4}/>

  </div>
     </section>

     

<section className="py-5 pt-0 bg-[ #dca48f33]">
  <div className="container">
  <h2 className="text-[25px] font-[600]" style={{color:" #2f5641"}}>Latest Products</h2>

  <ProductsSlider items={6}/>
  

  </div>
</section> */}




{/* <section className="py-5 pt-0 bg-[ #dca48f33]">
  <div className="container">
  <h2 className="text-[25px] font-[600]" style={{color:" #2f5641"}}>Featured Products</h2>

  <ProductsSlider items={6}/>
  <AddsBannerSlider items={3}/>

  </div>
</section> */}

{/* <section className="py-5 pt-0 bg-[ #dca48f33] blogSection">
  <div className="container">
    <h2 className="text-[25px] font-[600] mb-4" style={{color:" #2f5641"}}>From The Blog</h2>
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      navigation={true}
      modules={[Navigation]}
      className="blogSlider"
    >
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
    </Swiper>
  </div>
</section> */}






<Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 6000 }}
      loop={true}
      slidesPerView={1}
      style={{ width: "100%", height: "auto", }}
    >
      <SwiperSlide>
        <img src="/1.jpg" alt="1" style={{ width: "100%" }} />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/2.jpg" alt="2" style={{ width: "100%" }} />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/3.jpg" alt="3" style={{ width: "100%" }} />
      </SwiperSlide> 
      
      <SwiperSlide>
        <img src="/4.jpg" alt="3" style={{ width: "100%" }} />
      </SwiperSlide> 

     
      


      </Swiper>
     


    <section className="py-20 px-4 bg-gradient-to-br from-teal-50 via-purple-50 to-peach-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            What's MoodMithAI?
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-teal-600 mb-4">
            The world's first Emotion-Commerce ecosystem.
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Your mood decides what you see, shop, and experience.
            <br />
            Powered by empathy, AI, and a sprinkle of mithai magic. 🍬
          </p>
        </motion.div>

        {/* 3 Animated Icons: Mood → Match → Magic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-16 relative"
        >
          {[
            { icon: '💭', label: 'Mood', desc: 'Tell us how you feel' },
            { icon: '🔗', label: 'Match', desc: 'We match your vibe' },
            { icon: '✨', label: 'Magic', desc: 'Experience transforms' },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-6xl md:text-7xl mb-4">{item.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{item.label}</div>
                <div className="text-sm md:text-base text-gray-600">{item.desc}</div>
              </motion.div>
              {index < 2 && (
                <div className="hidden md:block text-3xl md:text-4xl text-gray-400">
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Scrolling Mood Bar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-6 shadow-lg overflow-hidden"
        >
          <div className="flex gap-4 md:gap-6 animate-scroll">
            {[...moods, ...moods].map((mood, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-gradient-to-r from-teal-400 to-purple-500 text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base whitespace-nowrap"
              >
                {mood}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Sweeten Your Mood Shop
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">
            Shop by Feeling — Because Emotions Deserve Gifts Too.
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your vibe, and let SUKU curate your ritual box.
          </p>
        </motion.div>

        {/* Mood Tiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {moodBoxes.map((box, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${box.color} rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300`}>
                <div className="text-6xl md:text-7xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {box.emoji}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {box.name}
                </h3>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white/90 text-sm mb-4">Curated items to match your mood</p>
                  <Link to="/products">
                    <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                      Explore Box
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link to="/products">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-full font-bold text-lg md:text-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Explore All Boxes 🍬
            </button>
          </Link>
        </motion.div>
      </div>
    </section>

    <section className="py-20 px-4 gradient-soft">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            "Hey, I'm SUKU — your mood whisperer."
          </h2>
          <div className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto space-y-4 leading-relaxed">
            <p>
              SUKU listens to your feelings, curates your experiences,
              and sends you tiny reminders that you're doing great.
            </p>
            <p>
              Talk to SUKU, shop with SUKU, or just vent to SUKU —
              no judgment, just sweet vibes.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl mb-3">{feature.icon}</div>
              <h3 className="text-sm md:text-base font-semibold text-gray-800">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link to="/meetsuku">
          <button className="bg-gradient-to-r from-teal-500 to-purple-500 text-white px-10 py-4 rounded-full font-bold text-lg md:text-xl hover:from-teal-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Meet SUKU 🤍
          </button>
          </Link>
        </motion.div>
      </div>
    </section>


    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Mood Buddy Network
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-indigo-600 mb-4">
            Because even AI needs a human touch.
          </p>
          <div className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto space-y-4 leading-relaxed">
            <p>
              Find your Mood Buddy — someone across the world who just gets you.
            </p>
            <p>
              Text, talk, meditate, or just exchange good vibes.
            </p>
            <p className="font-semibold text-gray-800">
              Real people. Real moods. Real connection.
            </p>
          </div>
        </motion.div>

        {/* Animated Globe with Connecting Avatars */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center mb-12 h-64 md:h-96"
        >
          {/* Globe */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="text-8xl md:text-9xl"
          >
            🌍
          </motion.div>

          {/* Connecting Avatars */}
          {[
            { emoji: '👤', position: 'top-0 left-1/2' },
            { emoji: '👤', position: 'bottom-0 left-1/2' },
            { emoji: '👤', position: 'left-0 top-1/2' },
            { emoji: '👤', position: 'right-0 top-1/2' },
            { emoji: '👤', position: 'top-1/4 right-1/4' },
            { emoji: '👤', position: 'bottom-1/4 left-1/4' },
          ].map((avatar, index) => (
            <motion.div
              key={index}
              className={`absolute ${avatar.position} transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            >
              {avatar.emoji}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link to="/moodbuddy">
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-10 py-4 rounded-full font-bold text-lg md:text-xl hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Find My Buddy 🌍
          </button>
          </Link>
        </motion.div>
      </div>
    </section>

    <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            The Sukoon Space
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-green-600 mb-4">
            Peace, But Make It Playful.
          </p>
          <div className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto space-y-3 leading-relaxed">
            <p>Yoga that listens to your energy.</p>
            <p>Meditation that moves with your mood.</p>
            <p>Live classes, guided calm, and mood-based coaching.</p>
          </div>
        </motion.div>

        {/* Visuals: Lotus, Headphones, Yoga Mat Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12"
        >
          {features2.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link to="/sukoonspace">
          <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-10 py-4 rounded-full font-bold text-lg md:text-xl hover:from-green-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Join a Sukoon Session 🧘‍♀️
          </button>
          </Link>
        </motion.div>
      </div>
    </section>
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Sweet Feed
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-pink-600 mb-4">
            The Sweetest Community on the Internet.
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            No filters. No flexing. Just gratitude,
            growth, and gentle reminders that you're not alone.
          </p>
        </motion.div>

        {/* Community Post Mockups */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12"
        >
          {posts.map((post, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-pink-100"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{post.emoji}</div>
                <div className="flex-1">
                  <p className="text-gray-800 mb-3 text-lg">{post.text}</p>
                  <p className="text-gray-600 text-sm">— {post.user}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link to="/sweetfeed">
          <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-10 py-4 rounded-full font-bold text-lg md:text-xl hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Join the Sweet Side 🍬
          </button>
          </Link>
        </motion.div>
      </div>
    </section>
    <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            How It Works
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-orange-600">
            Simplicity, Sweetened.
          </p>
        </motion.div>

        {/* 3 Steps with Animated Path */}
        <div className="relative">
          {/* Animated Path */}
          <motion.div
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 transform -translate-y-1/2"
            style={{ zIndex: 0 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="bg-white rounded-full w-24 h-24 md:w-32 md:h-32 flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-orange-200 relative z-10">
                  <div className="text-4xl md:text-5xl">{step.emoji}</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-3">
                    {step.number}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Why It Works
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-indigo-600 mb-4">
            Because Feelings Deserve a Framework.
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto italic">
            MoodMithAI isn't just AI — it's Emotional Intelligence at scale.
          </p>
        </motion.div>

        {/* Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl mb-4">
                {index === 0 && '💭'}
                {index === 1 && '🤝'}
                {index === 2 && '🌱'}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-600">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    <section className="py-20 px-4 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            What Our Community Says
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl mb-4">{testimonial.emoji}</div>
              <p className="text-lg md:text-xl text-gray-800 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
     </>
  
  );
};

export default Home;