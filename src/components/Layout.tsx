import React, { PropsWithChildren } from "react";
import data from "../store/data.json";

import JobListings from "./JobsListings";

interface LayoutProps {}
const Layout = ({}: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <header>header</header>
      <main>
        <JobListings data={data} />
      </main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
