import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { TopNavigation } from "../components";
import { PageLayout } from "../Layout";

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
