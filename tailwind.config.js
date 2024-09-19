/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Deep blue
        secondary: "#22D3EE", // Light cyan
        accent: "#F97316", // Vibrant orange
        background: "#F3F4F6", // Light gray
        textPrimary: "#111827", // Dark gray for text
        textSecondary: "#6B7280", // Medium gray for secondary text
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
