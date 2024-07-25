import React from "react";
import ContexB from "./ContexB";

export const UserContext = React.createContext();
export const ChannelContex = React.createContext();

function Contextmain() {
  return (
    <div>
      <UserContext.Provider value={"Gagan"}>
        <ChannelContex.Provider value={"REact-js"}>
          <ContexB />
        </ChannelContex.Provider>
        
      </UserContext.Provider>
    </div>
  );
}

export default Contextmain;
