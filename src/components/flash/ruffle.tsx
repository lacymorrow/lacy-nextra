import Script from "next/script";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type Props = {
  src: string;
};

export const Ruffle = ({ src }: Props) => {
  return (
    <>
      <Script
        src="/ruffle/ruffle.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window has been populated`)
        }
      />
      <AspectRatio ratio={16 / 9}>
        <object data={src} className="w-full">
          <param name="movie" value={src} />
          <p>
            Your browser does not support WASM,{" "}
            <a href="https://ruffle.rs/">see Ruffle documentation</a>.
          </p>
        </object>
      </AspectRatio>
    </>
  );
};

export default Ruffle;
