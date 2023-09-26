import Ruffle from "@/components/flash/ruffle";
import capitalize from "@/utils/capitalize";

type Props = {
  name: string;
};

export const Flash = ({ name }: Props) => {
  return (
    <>
      <h1 className="nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100">
        Flash: {capitalize(name)}
      </h1>
      <div>
        <Ruffle src={`/flash/${name}.swf`} />
      </div>
    </>
  );
};

export default Flash;
