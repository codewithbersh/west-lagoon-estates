// components
import AvailableVillaCards from "@/app/components/AvailableVillaCards";
import Container from "@/app/components/ui/Container";
import Heading from "@/app/components/ui/Heading";

// types
import { VillaType } from "@/types/villa";

type Props = {
  villas: VillaType[];
};

const OtherVillas = ({ villas }: Props) => {
  return (
    <Container className=" space-y-6 py-6">
      <Heading size="md">Explore other villas</Heading>
      <AvailableVillaCards villas={villas} />
    </Container>
  );
};

export default OtherVillas;
