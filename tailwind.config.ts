import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      backgroundColor: {
        secondary: "#292929",
        third: "#FF4141",
        fourth: "#FFE135",
        fifth: "#00A2FF",
      },
    },
  },
  plugins: [],
} satisfies Config;
