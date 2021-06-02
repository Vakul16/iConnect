module.exports = {
  important: true,
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#ff6666",
      },
      fontFamily: {
        body: ["Jost"],
      },
      backgroundImage: (theme) => ({
        aboutPattern: "url('/src/Assets/bg-2.jpg')",
        journey1: "url('/src/Assets/bg-1.jpg')",
        journey2: "url('/src/Assets/bg-3.jpg')",
        journey3: "url('/src/Assets/bg-4.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      animation: ["motion-safe"],
    },
  },
  plugins: [],
};
