import React, { PropsWithChildren } from "react";

interface BadgeProps {
  type: "new" | "featured";
  visible: boolean;
}

const Badge = ({ type, visible }: PropsWithChildren<BadgeProps>) => {
  return (
    <span
      className="badge"
      style={{
        visibility: visible ? "visible" : "hidden",
        backgroundColor: type === "new" ? "" : "black",
      }}
    >
      {type.toUpperCase()}
    </span>
  );
};

export default Badge;
