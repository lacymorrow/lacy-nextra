import Ruffle from "@/components/flash/ruffle";
import capitalize from "@/utils/capitalize";

type Props = {
  name: string;
};

export const Flash = ({ name }: Props) => {
  return (
    <>
      <div className="mt-4">
        <Ruffle src={`/flash/${name}.swf`} />
      </div>
    </>
  );
};

export default Flash;
