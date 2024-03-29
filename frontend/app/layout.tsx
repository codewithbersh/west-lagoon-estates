import "./globals.css";
import Footer from "./components/Footer";
import { Roboto } from "next/font/google";
import NavBar from "./components/navbar/NavBar";
import { NavProvider } from "./context/NavContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "West Lagoon Estates",
  description: "Villas For Rent in West Bay, Doha, Qatar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body className={`${roboto.className}`}>
        <NavProvider>
          <NavBar />
          {children}
          <Footer />
        </NavProvider>
      </body>
    </html>
  );
}
