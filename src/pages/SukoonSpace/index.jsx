import React from 'react'
import { motion } from 'framer-motion'

// THE SUKOON SPACE PAGE
// Single-file React component (JavaScript). Uses Tailwind CSS for styling and Framer Motion for animation.
// Note: Make sure your project has Tailwind CSS and Framer Motion installed. Optionally add a Poppins/Inter font in index.html.

const features = [
  {
    id: 1,
    title: 'Guided Sessions',
    subtitle: 'Yoga, Dance, Meditation',
    emoji: '🧘',
  },
  {
    id: 2,
    title: 'Coaching Corner',
    subtitle: 'Life & happiness coaches',
    emoji: '💬',
  },
  {
    id: 3,
    title: 'Audio Journeys',
    subtitle: 'Daily calm meditations',
    emoji: '🎧',
  },
  {
    id: 4,
    title: 'Affirmation Challenges',
    subtitle: '7-day journaling journeys',
    emoji: '✍️',
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function SukoonSpace() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FBF7FF] via-[#F6F7FF] to-[#F0FBFF] text-slate-800 font-sans">
      {/* Page wrapper */}
      <header className="max-w-6xl mx-auto px-6 py-10 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/60 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                Move your body. Calm your mind. Meet your tribe.
              </h1>
              <p className="mt-4 text-slate-600 max-w-xl">
                A gentle space to practice, restore and grow — guided sessions, soulful audio journeys,
                mindful coaching and small daily rituals to keep your peace.
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 inline-flex items-center gap-3 bg-gradient-to-r from-[#9BE7D6] to-[#C8B6FF] text-slate-900 font-medium px-5 py-3 rounded-full shadow-md hover:shadow-lg transform"
              >
                <span className="text-xl">🕊️</span>
                <span>Start My Sukoon Routine</span>
              </motion.button>
            </div>

            {/* Decorative card on the right for larger screens */}
            <div className="hidden md:flex w-80 h-44 rounded-2xl p-4 flex-col justify-between bg-gradient-to-br from-white to-[#F7F9FF] shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#FDECEF] flex items-center justify-center text-2xl">✨</div>
                <div>
                  <p className="text-sm text-slate-500">Daily Ritual</p>
                  <p className="font-semibold">Breath + Gentle Movement</p>
                </div>
              </div>
              <div className="text-sm text-slate-500">5–15 mins • Beginner friendly</div>
            </div>
          </div>
        </motion.div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        {/* Features Grid */}
        <section className="mt-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((f) => (
              <motion.article
                key={f.id}
                variants={cardVariants}
                className="relative rounded-xl p-6 flex flex-col gap-4 bg-white/60 backdrop-blur-md shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl h-12 w-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-white to-[#F5FAFF]">{f.emoji}</div>
                  <div>
                    <h3 className="text-lg font-semibold">{f.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{f.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600">Explore short, focused sessions designed to fit your day — whether you have 5 minutes or 45.</p>

                <div className="mt-auto flex items-center justify-between">
                  <button className="text-sm font-medium underline underline-offset-2 decoration-1 decoration-slate-200">Explore</button>
                  <div className="text-xs text-slate-500">Beginner friendly</div>
                </div>

                {/* subtle floating accent */}
                <span className="absolute -right-6 -top-6 text-4xl opacity-10 select-none">{f.emoji}</span>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Coaching + Audio section (two column stack) */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6 bg-gradient-to-br from-[#FFF8F3] to-[#F3FAFF] shadow-lg"
          >
            <h4 className="text-xl font-semibold">Coaching Corner</h4>
            <p className="mt-3 text-slate-600">One-on-one and group coaching with compassionate facilitators focusing on life skills, joy and resilience.</p>

            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Short 30-min intro calls</li>
              <li>• Tailored happiness exercises</li>
              <li>• Group workshops</li>
            </ul>

            <div className="mt-6">
              <button className="px-4 py-2 rounded-lg bg-white/60 shadow-sm">Meet the coaches</button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6 bg-white/60 backdrop-blur-md shadow-lg"
          >
            <h4 className="text-xl font-semibold">Audio Journeys</h4>
            <p className="mt-3 text-slate-600">Daily calm meditations, narrated journeys and micro-sessions to ground you in the present.</p>

            <div className="mt-4 grid grid-cols-1 gap-3">
              <div className="flex items-center justify-between rounded-lg p-3 bg-[#FEFEFE] shadow-sm">
                <div>
                  <div className="text-sm font-medium">Morning Grounding</div>
                  <div className="text-xs text-slate-500">8 mins • Breath + visualization</div>
                </div>
                <div className="text-2xl">▶️</div>
              </div>

              <div className="flex items-center justify-between rounded-lg p-3 bg-[#FEFEFE] shadow-sm">
                <div>
                  <div className="text-sm font-medium">Evening Wind-down</div>
                  <div className="text-xs text-slate-500">10 mins • Body scan</div>
                </div>
                <div className="text-2xl">▶️</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Affirmation Challenge CTA strip */}
        <section className="mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-[#FCEFF6] via-[#F7FBFF] to-[#EFFFEE] shadow-lg"
          >
            <div>
              <h4 className="text-lg font-semibold">Affirmation Challenges</h4>
              <p className="mt-1 text-sm text-slate-600">Join a 7-day journaling journey to build a kinder inner voice — daily prompts and gentle nudges.</p>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-4 py-2 rounded-full bg-white/70 shadow-sm">Join the 7-day plan</button>
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-[#A8F0E3] to-[#D6C2FF] font-medium">Start now</button>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 pb-10">
        <div className="mt-10 text-center text-slate-500 text-sm">© {new Date().getFullYear()} The Sukoon Space — Move • Calm • Connect</div>
      </footer>
    </div>
  )
}
