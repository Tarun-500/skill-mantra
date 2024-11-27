import localFont from "next/font/local";
import "./globals.css";

const acme = localFont({
  src: "./fonts/Acme-Regular.woff",
  variable: "--font-acme",
  weight: "100 200 300 400 500 600 700 800 900",
});

const gilroyBold = localFont({
  src: "./fonts/Gilroy-Bold.woff",
  variable: "--font-gilroy-bold",
  weight: "500 600 700 800 900",
});

const gilroyMedium = localFont({
  src: "./fonts/Gilroy-Medium.woff",
  variable: "--font-gilroy-medium",
  weight: "100 200 300 400 500 600 700 800 900",
});


const nunito = localFont({
  src: "./fonts/Nunito.woff",
  variable: "--font-nunito",
  // weight: "100 200 300 400 500 600 700 800 900",
});


export const metadata = {
  title: "Skill Mantra",
  description: "Skill mantra is a platform for learning new skills",
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${acme.variable} ${gilroyBold.variable} ${gilroyMedium.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}
