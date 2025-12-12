import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiChevronRight, FiSend } from "react-icons/fi";

// Single-file React component (JavaScript)
// Uses TailwindCSS utility classes and framer-motion for animations.
// Default export a component named MoodBuddyPage

export default function MoodBuddy() {
  const [mood, setMood] = useState("Happy");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const steps = [
    { id: 1, title: "Choose your mood.", icon: "1️⃣" },
    { id: 2, title: "Get matched.", icon: "2️⃣" },
    { id: 3, title: "Say hi!", icon: "3️⃣" },
  ];

  const chatSample = [
    { who: "them", text: "Hey! Looks like we share the same vibe today 🌸" },
    { who: "you", text: "OMG same! Tell me about your day?" },
    { who: "them", text: "I went on a walk and found a cozy cafe ☕️" },
  ];

  const testimonials = [
    {
      name: "Anika",
      text: "I met my mood buddy within a day — we still chat every week!",
      rating: 5,
    },
    {
      name: "Ravi",
      text: "The vibe match felt real. Warm, friendly, low-pressure.",
      rating: 5,
    },
    {
      name: "Sana",
      text: "Perfect for lonely evenings — a lovely human to talk to.",
      rating: 4,
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    // mock submit
    setSubmitted(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setMood("Happy");
      setSubmitted(false);
      alert("Buddy request sent! We'll email you when we find your match.");
    }, 700);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pastel-50 to-white px-4 py-10 md:py-16 lg:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              Your Mood’s New Best Friend.
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              Find someone who feels like you do — wherever they are. Share stories,
              kindness, and care.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <button
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-pink-400 via-rose-400 to-yellow-300 text-white font-semibold shadow-lg transform transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-200"
                onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
              >
                Get My Buddy 💌 <FiChevronRight />
              </button>

              <button
                onClick={() => window.scrollTo({ top: 1200, behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200 text-gray-800 font-medium hover:shadow"
              >
                <FiMail /> Request a Buddy
              </button>
            </div>
          </div>

          {/* Hero card - quick summary */}
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full md:w-96 bg-white/60 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Mood</p>
                <p className="font-semibold text-lg">{mood}</p>
              </div>
              <div className="text-sm text-gray-400">Online · 2 mood buddies</div>
            </div>

            <div className="mt-4">
              <p className="text-xs text-gray-500">Quick preview</p>
              <div className="mt-3 space-y-2">
                <div className="text-sm text-gray-700">“Hey — wanna chat about books?”</div>
                <div className="text-sm text-gray-700">“Yes! I just finished a lovely novel.”</div>
              </div>
            </div>
          </motion.div>
        </motion.header>

        {/* Main layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Steps + Chat preview */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-bold">How it works</h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {steps.map((s, idx) => (
                  <motion.div
                    key={s.id}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col items-start gap-3"
                  >
                    <div className="text-2xl">{s.icon}</div>
                    <div className="font-semibold">{s.title}</div>
                    <div className="text-sm text-gray-500">{idx === 0 ? "Pick a mood that matches your day" : idx === 1 ? "We search for kind humans" : "Send a friendly hello"}</div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-bold">Chat preview</h2>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-4 bg-gradient-to-b from-white/70 to-white/50 rounded-2xl p-4 shadow-xl border border-gray-100"
              >
                <div className="h-56 overflow-auto p-3 space-y-3">
                  {chatSample.map((m, i) => (
                    <div
                      key={i}
                      className={`flex ${m.who === "you" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-2xl ${
                          m.who === "you" ? "bg-pink-50 text-pink-900" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {m.text}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 border-t pt-3 flex items-center gap-3">
                  <input
                    placeholder="Type a friendly hello..."
                    className="flex-1 rounded-full px-4 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-200"
                  />
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-400 text-white font-medium">
                    Send
                  </button>
                </div>
              </motion.div>
            </section>

            {/* Testimonials */}
            <section className="mt-8">
              <h2 className="text-xl font-bold">Testimonials</h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {testimonials.map((t, i) => (
                  <motion.div key={i} whileHover={{ translateY: -6 }} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-200 to-yellow-200 flex items-center justify-center font-semibold text-gray-800">{t.name[0]}</div>
                      <div>
                        <div className="font-semibold">{t.name}</div>
                        <div className="text-xs text-gray-400">{Array.from({ length: t.rating }).map((_, i) => "★").join("")}</div>
                      </div>
                    </div>
                    <p className="mt-3 text-gray-600 text-sm">{t.text}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Right: Request Form + CTA */}
          <aside className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
            >
              <h3 className="text-lg font-bold">Request a Buddy</h3>
              <p className="text-sm text-gray-500 mt-1">Tell us a little so we can find a good match.</p>

              <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                <label className="block text-sm text-gray-600">Select Mood</label>
                <select value={mood} onChange={(e) => setMood(e.target.value)} className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200">
                  <option>Happy</option>
                  <option>Calm</option>
                  <option>Lonely</option>
                  <option>Anxious</option>
                  <option>Excited</option>
                </select>

                <div>
                  <label className="block text-sm text-gray-600">Name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200" placeholder="Your name" />
                </div>

                <div>
                  <label className="block text-sm text-gray-600">Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200" placeholder="you@email.com" />
                </div>

                <div>
                  <label className="block text-sm text-gray-600">Short message</label>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={3} className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200" placeholder="Say hi to your future buddy..." />
                </div>

                <button type="submit" disabled={submitted} className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-400 via-rose-400 to-yellow-300 text-white font-semibold shadow-lg">
                  {submitted ? "Sending..." : "Request Buddy 💌"}
                </button>
              </form>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-pink-50 to-yellow-50 rounded-xl p-6 shadow-inner border border-gray-100">
              <h4 className="text-lg font-bold">Ready to meet someone?</h4>
              <p className="mt-2 text-sm text-gray-600">Click below and we'll look for the perfect mood match.</p>
              <div className="mt-4">
                <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold transform transition hover:scale-105">
                  Get My Buddy 💌
                </button>
              </div>
            </motion.div>

            <div className="text-xs text-gray-400">We respect your privacy. This is a mock UI—integrate your backend to store requests.</div>
          </aside>
        </div>

        {/* Footer small */}
        <footer className="mt-12 text-center text-sm text-gray-500">Made with care — MoodBuddy UI · Demo</footer>
      </div>

      {/* Small Tailwind custom colors (if you want to include in your tailwind config, add these under theme.extend.colors) */}
      {/*
        extend: {
          colors: {
            pastel: {
              50: '#fff9fb',
            }
          }
        }
      */}
    </div>
  );
}
