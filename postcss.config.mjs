const config = {
  plugins: {
    "@tailwindcss/postcss": {
      theme: { extend: { fontFamily: { display: ["var(--font-cormorant)", "serif"] } } } 
    },
  },
};

export default config;
