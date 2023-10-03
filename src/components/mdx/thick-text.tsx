import { Children } from "react";

const ThickText = ({ children }: { children: JSX.Element }) => {
  return <span className="text-xl font-bold">{children}</span>;
};

export default ThickText;
