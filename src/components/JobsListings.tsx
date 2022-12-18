import React, { PropsWithChildren, useEffect, useState } from "react";
import { filterJobsByTags, JobObj, removeDuplicates } from "../utils/functions";
import JobCard from "./JobCard";
import SearchBox from "./SearchBox";

interface JobListingsProps {
  data: JobObj[];
}
const JobListings = ({ data }: PropsWithChildren<JobListingsProps>) => {
  const [filteredData, setFilteredData] = useState(data);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    console.log({ tags });
    setFilteredData(filterJobsByTags(tags, data));
  }, [tags]);

  const handleRemoveTag = (index: number) =>
    index !== -1 ? setTags(tags.filter((tag, i) => i !== index)) : setTags([]);

  return (
    <div className="cards-container">
      {tags.length > 0 && <SearchBox list={tags} onClick={handleRemoveTag} />}
      {filteredData.map((job: JobObj) => (
        <JobCard key={job.id} job={job} setTags={setTags} />
      ))}
    </div>
  );
};

export default JobListings;
