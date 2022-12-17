import React, { PropsWithChildren } from "react";

interface SeparatorProps {
  size?: number;
}
const Separator = ({ size }: PropsWithChildren<SeparatorProps>) => {
  return <div className="separator" style={{ height: `${size}%` }} />;
};

export default Separator;
