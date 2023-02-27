import { lazy } from "react";

export const Login = lazy(() => import("./login/login"));
export const Info = lazy(() => import("./info/info"));
export const Users = lazy(() => import("./user/users"));
export const InfoView = lazy(() => import("./infoView/infoView"));
