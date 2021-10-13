import React from "react";

import Common, { CommonProvider } from "./Common";

const Provider = ({ children }: { children: React.ReactNode }) => (
  <CommonProvider>{children}</CommonProvider>
);

export default { Common, Provider };
