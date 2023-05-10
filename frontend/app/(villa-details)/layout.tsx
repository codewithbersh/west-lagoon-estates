import ListingFooterMobile from "./[slug]/components/ListingFooterMobile";
import NavBar from "./components/NavBar";

export default function VillaDetailsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" relative">
      <NavBar />
      {children}
      <ListingFooterMobile />
    </section>
  );
}
