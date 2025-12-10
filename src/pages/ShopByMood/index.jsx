import React, { useState } from "react";

export default function ShopByMood() {
  const moods = [
    { name: "Love", color: "#ff8fb1" },
    { name: "Calm", color: "#9cd3d3" },
    { name: "Happy", color: "#ffd86b" },
    { name: "Energy", color: "#ff9f6e" },
  ];

  const products = [
    {
      mood: "Love",
      title: "💖 The Love Box",
      subtitle: "Because love is a mood, not just a moment.",
    },
    {
      mood: "Calm",
      title: "🌿 The Calm Box",
      subtitle: "Slow down. Breathe. Feel again.",
    },
    {
      mood: "Happy",
      title: "😊 The Happy Box",
      subtitle: "Small joys create big magic.",
    },
    {
      mood: "Energy",
      title: "⚡ The Energy Box",
      subtitle: "Unleash the spark within you.",
    },
  ];

  const [selectedMood, setSelectedMood] = useState("Love");
  const themeColor = moods.find((m) => m.name === selectedMood)?.color;

  return (
    <div style={styles.page}>
      {/* LEFT FILTER BAR */}
      <aside style={styles.sidebar}>
        <h3 style={styles.sidebarTitle}>Shop by Mood</h3>

        <ul style={styles.sidebarList}>
          {moods.map((mood) => (
            <li
              key={mood.name}
              onClick={() => setSelectedMood(mood.name)}
              style={{
                ...styles.sidebarItem,
                borderLeft:
                  selectedMood === mood.name
                    ? `5px solid ${mood.color}`
                    : "5px solid transparent",
                backgroundColor:
                  selectedMood === mood.name ? "#f1f1f1" : "transparent",
              }}
            >
              {mood.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* PRODUCT GALLERY */}
      <main style={styles.gallery}>
        <h2 style={{ ...styles.galleryTitle, color: themeColor }}>
          {selectedMood} Collection
        </h2>

        <div style={styles.productGrid}>
          {products
            .filter((p) => p.mood === selectedMood)
            .map((product, index) => (
              <div
                key={index}
                style={{
                  ...styles.card,
                  borderColor: themeColor,
                  animationDelay: `${index * 0.1}s`,
                }}
                className="fade-in-up"
              >
                <h3>{product.title}</h3>
                <p>{product.subtitle}</p>

                <button
                  style={{
                    ...styles.button,
                    backgroundColor: themeColor,
                  }}
                >
                  See What’s Inside
                </button>

                <div style={styles.extras}>
                  <p>✨ Box contents</p>
                  <p>💬 Affirmation of the day</p>
                  <p>🎧 Ask Suku Suggestion: Pair with our Calm Playlist</p>
                </div>
              </div>
            ))}
        </div>
      </main>

      {/* INLINE ANIMATION STYLES */}
      <style>
        {`
        .fade-in-up {
          opacity: 0;
          transform: translateY(15px);
          animation: fadeUp 0.6s forwards;
        }
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* RESPONSIVE */
        @media(max-width: 900px) {
          .sidebar {
            width: 100% !important;
            height: auto !important;
            display: flex !important;
            overflow-x: auto;
            white-space: nowrap;
          }
          .sidebar ul {
            display: flex !important;
            gap: 12px;
          }
          .sidebar li {
            display: inline-block !important;
          }
          .gallery {
            padding: 20px !important;
          }
        }
        `}
      </style>
    </div>
  );
}

// INLINE STYLES OBJECT
const styles = {
  page: {
    display: "flex",
    minHeight: "100vh",
    background: "#fafafa",
    fontFamily: "Poppins, sans-serif",
  },

  /* Sidebar */
  sidebar: {
    width: 250,
    padding: 30,
    background: "#fff",
    boxShadow: "4px 0 15px rgba(0,0,0,0.05)",
    position: "sticky",
    top: 0,
    height: "100vh",
  },

  sidebarTitle: {
    fontSize: 22,
    marginBottom: 20,
  },

  sidebarList: {
    listStyle: "none",
    padding: 0,
  },

  sidebarItem: {
    padding: "12px 15px",
    margin: "8px 0",
    cursor: "pointer",
    fontWeight: 500,
    borderRadius: 8,
    transition: "0.3s",
  },

  /* Gallery */
  gallery: {
    flex: 1,
    padding: "40px 60px",
  },

  galleryTitle: {
    fontSize: 32,
    marginBottom: 25,
  },

  /* Product Grid */
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 25,
  },

  card: {
    background: "#fff",
    border: "3px solid",
    borderRadius: 18,
    padding: 25,
    transition: "0.3s",
  },

  button: {
    marginTop: 10,
    padding: "10px 18px",
    border: "none",
    color: "#fff",
    borderRadius: 12,
    cursor: "pointer",
    fontWeight: 600,
  },

  extras: {
    marginTop: 15,
    fontSize: 14,
    color: "#666",
  },
};
