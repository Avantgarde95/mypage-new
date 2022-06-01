import React from "react";

import Page from "containers/Page";
import Sky from "containers/home/Sky";
import Content from "containers/home/Content";

const HomePage = () => (
  <Page background={<Sky />}>
    <Content />
  </Page>
);

export default HomePage;
