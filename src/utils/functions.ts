export interface JobObj {
  id: number;
  company: string;
  logo: string;
  newJob: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

const isExist = (name: never, obj: JobObj): boolean =>
  obj[name] === undefined ? false : true;

const removeDuplicates = (arr: string[]): string[] =>
  arr.filter((el, index) => index === arr.indexOf(el));

const filterJobsByTags = (tags: string[], jobs: JobObj[]): JobObj[] => {
  if (tags.length === 0) return jobs;
  let newArray: JobObj[] = [];

  for (let i = 0; i < tags.length; i++) {
    jobs.map((job: JobObj) => {
      // check exisiting job
      if (newArray.includes(job)) return;
      // check role and leve
      if (job.role === tags[i] && !newArray.includes(job)) newArray.push(job);
      if (job.level === tags[i] && !newArray.includes(job)) newArray.push(job);

      // check languages
      if (job.languages.includes(tags[i]) && !newArray.includes(job))
        newArray.push(job);
      // check tools
      if (job.tools.includes(tags[i]) && !newArray.includes(job))
        newArray.push(job);
    });
  }
  return newArray;
};

export { filterJobsByTags, removeDuplicates };
