
const ACCENTS = [
  "#d99ec8", // pink (the original)
  "#e89ec8", // bright pink
  "#b3a5e8", // periwinkle
  "#c8a5e8", // lilac
  "#9ec8d9", // sky
  "#9ed9c8", // mint
  "#e8c39e", // peach
  "#d9b39e", // sand
];

const STORAGE_KEY = "accent";

export const applyRandomAccent = () => {
  let choices = ACCENTS;

  try {
    const last = localStorage.getItem(STORAGE_KEY);
    const filtered = ACCENTS.filter((c) => c !== last);
    if (filtered.length) choices = filtered;
  } catch {
    console.warn("accent: could not read last color, using full palette");
  }

  const accent = choices[Math.floor(Math.random() * choices.length)];
  document.documentElement.style.setProperty("--main-color", accent);

  try {
    localStorage.setItem(STORAGE_KEY, accent);
  } catch {
    console.warn("accent: could not save color for next visit");
  }
};
