import React, { PropsWithChildren } from "react";
import data from "../store/data.json";

import JobListings from "./JobsListings";
import SwitchTheme from "./SwitchTheme";

interface LayoutProps {}
const Layout = ({}: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <header>{/* <SwitchTheme theme="dark" /> */}</header>
      <main>
        <JobListings data={data} />
      </main>
      <footer>
        Coded by <a href="#"> Latif Essam</a>.
      </footer>
    </>
  );
};

export default Layout;
