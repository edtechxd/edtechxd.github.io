'use strict';

// Toggle Overlay Menu
function toggleMenu() {
  const overlayMenu = document.getElementById("overlay-menu");
  if (overlayMenu) {
    overlayMenu.classList.toggle("active");
  } else {
    console.error("Element with ID 'overlay-menu' not found.");
  }
}

// JavaScript Ticker
const tickerTexts = [
  "📱 clickity-click-clack-click…",
  "🏃🏾‍➡️ Running: Peloton 30 min HIIT",
  "🎧 Listening: MF DOOM",
  "👟 Wearing: Air Max '95",
  "📚 Reading: Ikigai",
  "✍🏾 Writing: GenAI Research Paper",
  "🎙️ Podcast: How'd We Get Here?…",
  "👨🏾‍💻 Working on: Grading…",
  "📺 Watching: Golden Girls",
  "📱 clickity-click-email…",
  "👨🏾‍🏫 Teaching: Typography 1",
  "🏃🏾‍➡️ Running: 5km",
  "🎧 Listening: André 3000",
  "🧘🏾‍♂️ Wellness: Meditating",
  "👟 Wearing: New Balance 540",
  "📚 Reading: Zen in the Art of Archery",
  "📱 clickity-clack-scroll-social…",
  "👨🏾‍💻 Working on: AI Design Tutor App",
  "📺 Watching: 24",
  "👨🏾‍🏫 Teaching: Entrepreneurship",
  "✍🏾 Writing: Design Tutorials",
  "👟 Wearing: Nike Air Huarache",
  "🎙️ Podcast: How'd We Get Here?…",
  "🏃🏾‍➡️ Running: 8km",
  "📱 clickity-clack-texting…",
  "🎧 Listening: 80's Pop",
  "📚 Reading: Ichigo Ichie",
  "📺 Watching: UFO Documentaries",
  "👨🏾‍🏫 Teaching: Portfolio",
  "🧘🏾‍♂️ Wellness: Yoga",
  "👨🏾‍💻 Working on: Lesson Plans",
  "🎧 Listening: 90's RnB",
];
let tickerIndex = 0;

function updateTicker() {
  const ticker = document.getElementById("ticker");
  if (ticker) {
    ticker.innerHTML = tickerTexts[tickerIndex];
    tickerIndex = (tickerIndex + 1) % tickerTexts.length;
  } else {
    console.error("Element with ID 'ticker' not found.");
  }
}

// Start ticker updates
updateTicker();
setInterval(updateTicker, 5000);

// Theme Switcher
const darkModeBtn = document.getElementById("dark-mode-btn");
const lightModeBtn = document.getElementById("light-mode-btn");
const altModeBtn = document.getElementById("alt-mode-btn");

// Ensure buttons exist before adding event listeners
if (darkModeBtn && lightModeBtn && altModeBtn) {
  // Apply Dark Mode
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.remove("light-mode", "alt-mode");
    document.body.classList.add("dark-mode");
  });

  // Apply Light Mode
  lightModeBtn.addEventListener("click", () => {
    document.body.classList.remove("dark-mode", "alt-mode");
    document.body.classList.add("light-mode");
  });

  // Apply Alternate Mode
  altModeBtn.addEventListener("click", () => {
    document.body.classList.remove("dark-mode", "light-mode");
    document.body.classList.add("alt-mode");
  });
} else {
  console.error("One or more theme switch buttons not found.");
}
