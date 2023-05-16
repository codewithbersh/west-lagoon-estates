// components
import Container from "@/app/components/ui/Container";
import Header from "./Header";
import ContactCTA from "./ContactCTA";
import AboutListing from "./AboutListing";
import Amenities from "./Amenities";

// types
import { VillaType } from "@/types/villa";

type Props = {
  villa: VillaType;
};

const MainSection = ({ villa }: Props) => {
  return (
    <Container className="space-y-6 py-0 pt-6 md:pt-0">
      <div className=" relative justify-between gap-12 md:flex">
        <div>
          <Header villa={villa} />
          <AboutListing about={villa.about} />
          <Amenities villa={villa} />
        </div>
        <ContactCTA />
      </div>
      <hr />
    </Container>
  );
};

export default MainSection;
