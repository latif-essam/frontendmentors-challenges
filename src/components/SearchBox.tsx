import { PropsWithChildren } from "react";

interface SearchBoxProps {
  list: string[];
  onClick: any;
}
const SearchBox = ({ list, onClick }: PropsWithChildren<SearchBoxProps>) => {
  return (
    <div className="search-box">
      <ul>
        {list.map((item, index) => (
          <li key={index} onClick={() => onClick(index)}>
            <span>{item}</span>
            <button>X</button>
          </li>
        ))}
      </ul>

      <button className="clear" onClick={() => onClick(-1)}>
        Clear
      </button>
    </div>
  );
};

export default SearchBox;
