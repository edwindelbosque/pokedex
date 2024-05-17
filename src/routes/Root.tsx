import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import {
  TopNavigation,
  PageLayout,
} from "../components";

export const Root = () => {
  return (
    <Fragment>
      <TopNavigation />
      <PageLayout>
        <Outlet />
      </PageLayout>
    </Fragment>
  );
}
