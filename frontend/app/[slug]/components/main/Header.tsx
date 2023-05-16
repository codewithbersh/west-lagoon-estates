// components
import Heading from "@/app/components/ui/Heading";
import { Text } from "@/app/components/ui/Text";

// icons & type
import { VillaType } from "@/types/villa";
import { BiArea, BiBath, BiBed, BiSwim } from "react-icons/bi";

type Props = {
  villa: VillaType;
};

const offerClassName =
  "flex w-fit items-center gap-2 rounded border px-[14px] py-[10px]";

const Header = ({ villa }: Props) => {
  return (
    <div className="space-y-6">
      <Heading size="md">{villa.title}</Heading>
      <div className=" flex flex-wrap gap-2">
        {/* location feature */}
        <div className={offerClassName}>
          <BiSwim className=" text-gray-800" />
          <Text size="small">{villa.locationFeature}</Text>
        </div>

        {/* beds */}
        <div className={offerClassName}>
          <BiBed className=" text-gray-800" />
          <Text size="small">{villa.bedroom} Bedrooms</Text>
        </div>

        {/* baths */}
        <div className={offerClassName}>
          <BiBath className=" text-gray-800" />
          <Text size="small">{villa.bathroom} Bathrooms</Text>
        </div>

        <div className={offerClassName}>
          <BiArea className=" text-gray-800" />
          <Text size="small">{villa.area}m² Property</Text>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
