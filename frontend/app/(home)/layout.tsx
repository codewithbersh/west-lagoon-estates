import { NavProvider } from "../context/NavContext";
import NavBar from "./components/navbar/NavBar";

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <NavProvider>
        <NavBar />
        {children}
      </NavProvider>
    </section>
  );
}
