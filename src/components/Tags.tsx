import React, { PropsWithChildren } from "react";
import { removeDuplicates } from "../utils/functions";

interface TagsProps {
  keys: string[];
  onClick: React.Dispatch<React.SetStateAction<string[]>>;
}
const Tags = ({ keys, onClick }: PropsWithChildren<TagsProps>) => {
  return (
    <div className="tags">
      <ul>
        {keys.map((key, index) => (
          <li
            key={index + key}
            onClick={() => onClick((pre) => removeDuplicates([...pre, key]))}
          >
            {key}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
