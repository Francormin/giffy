import { createContext } from "react";

const StaticContext = createContext({
  name: "esto-es-sin-provider",
  channelSubscription: true
});

export default StaticContext;
