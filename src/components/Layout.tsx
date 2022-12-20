import React, { PropsWithChildren } from "react";
import data from "../store/data.json";

import JobListings from "./JobsListings";

interface LayoutProps {}
const Layout = ({}: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <header />
      <main>
        <JobListings data={data} />
      </main>
      <footer>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#"> Latif Essam</a>.
      </footer>
    </>
  );
};

export default Layout;
