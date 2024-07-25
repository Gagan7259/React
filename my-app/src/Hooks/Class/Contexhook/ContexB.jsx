import React from "react";
import ContexA from "./ContexA";
import { useContext } from "react";
import { UserContext, ChannelContex } from "./Contextmain";
function ContexB() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContex);

  return (
    <div>
      {user}-{channel}
      <ContexA />
    </div>
  );
}

export default ContexB;
