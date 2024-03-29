// libraries

import Image from "next/image";
import Link from "next/link";

// components
import Heading from "./ui/Heading";
import { Text } from "./ui/Text";

// icons & types
import { BiArea, BiBath, BiBed } from "react-icons/bi";
import { VillaType } from "@/types/villa";
import { AiOutlineCar } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

type Props = {
  villas: VillaType[];
};

const amenitiesClasses = " flex gap-2 items-center text-gray-600";

const AvailableVillaCards = ({ villas }: Props) => {
  const iconSize = 20;
  const iconClassName = "text-gray-500";
  const format = require("comma-number");

  return (
    <div className="grid auto-rows-max grid-cols-1 place-items-start gap-6 sm:grid-cols-2 sm:place-items-start min-[915px]:grid-cols-3">
      {villas
        .filter((villa) => villa.available === true)
        .map((villa, index) => {
          return (
            <Link href={`/${villa.slug}`} passHref key={index}>
              <div className=" h-full max-w-[400px] rounded-lg border shadow transition duration-300 ease-in-out hover:cursor-pointer  hover:border-gray-200 hover:shadow-lg">
                <div className="object-fill">
                  <Image
                    className="h-[200px] rounded-t-lg object-cover"
                    src={villa.photos[0].image}
                    alt={villa.cardTitle}
                  />
                </div>
                <div className="flex flex-col justify-between gap-4 p-6">
                  <div className="">
                    <div className="space-y-2">
                      <Heading size="sm" className="font-medium">
                        {villa.cardTitle}
                      </Heading>
                      <Text className="h-[96px]">{villa.cardCaption}</Text>
                    </div>

                    <div className="flex justify-between">
                      <div className={amenitiesClasses}>
                        <BiBed size={iconSize} className={iconClassName} />
                        <Text size="small">{villa.bedroom}</Text>
                      </div>

                      <div className={amenitiesClasses}>
                        <BiBath size={iconSize} className={iconClassName} />
                        <Text size="small">{villa.bathroom}</Text>
                      </div>

                      <div className={amenitiesClasses}>
                        <AiOutlineCar
                          size={iconSize}
                          className={iconClassName}
                        />
                        <Text size="small">{villa.garage}</Text>
                      </div>

                      <div className={amenitiesClasses}>
                        <BiArea size={iconSize} className={iconClassName} />
                        <Text size="small">{villa.area} m²</Text>
                      </div>
                    </div>
                  </div>

                  <hr />
                  <div className="flex items-center justify-between">
                    <div className=" flex items-start gap-[6px]">
                      <Text className="leading-tight" size="small">
                        QAR
                      </Text>
                      <Heading size="lg" className=" font-bold tracking-wide">
                        {format(villa.price)}
                      </Heading>
                    </div>
                    <div className="flex items-center gap-1">
                      <Text
                        size="small"
                        className="font-medium tracking-wide text-emerald-600"
                      >
                        View Villa
                      </Text>
                      <MdOutlineKeyboardArrowRight
                        size={24}
                        className=" text-emerald-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default AvailableVillaCards;
