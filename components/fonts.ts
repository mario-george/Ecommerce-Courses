import { Orbitron, Exo_2 } from "next/font/google";
export const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  // latin since we are using english
});
export const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  weight: ["400", "500", "600", "700", "800"],
});
