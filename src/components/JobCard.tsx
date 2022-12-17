import React, { PropsWithChildren, useState } from "react";
import { JobObj } from "../utils/functions";
import Badge from "./Badge";
import Separator from "./Separator";
import Tags from "./Tags";

interface JobCardProps {
  job: JobObj;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}
const JobCard = ({ job, setTags }: PropsWithChildren<JobCardProps>) => {
  const {
    id,
    company,
    logo,
    newJob,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;
  const tags = [role, level, ...languages, ...tools];
  return (
    <div className={`card ${featured && newJob ? "card_plus" : ""}`} key={id}>
      <div className="logo">
        <img src={require(`./../assets/images/${logo}`)} height={"100%"} />
      </div>
      <div className="info">
        <div className="badges">
          <span>{company}</span>
          <Badge visible={newJob} type="new" />
          <Badge visible={featured} type="featured" />
        </div>
        <Separator size={15} />
        <h2>{position}</h2>
        <Separator size={15} />
        <div className="info_2">
          <span>{postedAt}</span>
          <span>. {contract}</span>
          <span>. {location}</span>
        </div>
      </div>
      <Tags keys={tags} onClick={setTags} />
    </div>
  );
};

export default JobCard;
