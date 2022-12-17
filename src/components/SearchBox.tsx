import React, { PropsWithChildren, RefCallback } from "react";

interface SearchBoxProps {
  list: string[];
  onClick: any;
}
const SearchBox = ({ list, onClick }: PropsWithChildren<SearchBoxProps>) => {
  return (
    <div className="search-box">
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={onClick}>Clear</button>
    </div>
  );
};

export default SearchBox;
