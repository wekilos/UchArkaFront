import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";

import { Info, InfoView, Login, Users } from "../pages/index";
import { Loading } from "../components/loading";

const PrivateRoute = lazy(() => import("./PrivateRoute"));
const PublicRoute = lazy(() => import("./PublicRoute"));
const App = () => {
    return (
        // forceRefresh={true}
        // history={history}
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <PrivateRoute
                        restricted={true}
                        component={Users}
                        path="/"
                        exact
                    />
                    <PrivateRoute
                        restricted={true}
                        component={Info}
                        path="/create/:id"
                        exact
                    />
                    <PrivateRoute
                        restricted={true}
                        component={InfoView}
                        path="/user/:id"
                        exact
                    />

                    <PrivateRoute component={Users} path="*" />
                    {/* <Route path="*" component={Users} /> */}
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
