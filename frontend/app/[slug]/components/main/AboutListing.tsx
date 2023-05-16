import { Text } from "@/app/components/ui/Text";

interface Props {
  about: string;
}

const AboutListing = ({ about }: Props) => {
  return (
    <div className="space-y-6 pt-6">
      <Text>{about}</Text>
      <hr />
    </div>
  );
};

export default AboutListing;
