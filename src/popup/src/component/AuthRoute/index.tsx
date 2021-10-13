import React, { ElementType, ReactNode } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import context from "src/popup/src/contexts";

export interface IAuthRoute {
  component: ElementType;
  isAuth?: boolean;
}

const AuthRoute = ({
  component: Component,
  isAuth,
  ...rest
}: IAuthRoute & RouteProps) => {
  const { user } = context.Common.useState();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth && !user ? (
          <Redirect
            to={{ pathname: "/signIn", state: { from: props.location } }}
          />
        ) : !isAuth && user && user.is_auth ? (
          <Redirect
            to={{ pathname: "/myPage", state: { from: props.location } }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default AuthRoute;
