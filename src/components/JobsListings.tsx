import React, { PropsWithChildren, useEffect, useState } from "react";
import { filterJobsByTags, JobObj, removeDuplicates } from "../utils/functions";
import JobCard from "./JobCard";

interface JobListingsProps {
  data: JobObj[];
}
const JobListings = ({ data }: PropsWithChildren<JobListingsProps>) => {
  const [filteredData, setFilteredData] = useState(data);
  const [tags, setTags] = useState<string[]>([]);

  console.log({ tags });

  useEffect(() => {
    setFilteredData(filterJobsByTags(tags, data));
  }, [tags]);
  return (
    <div className="container">
      {data.length} : {filteredData.length} tags:{tags}
      {filteredData.map((job: JobObj) => (
        <JobCard key={job.id} job={job} setTags={setTags} />
      ))}
    </div>
  );
};

export default JobListings;
