import React from "react";
import { ChannelContex, UserContext } from "./Contextmain";
function ContexA() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContex.Consumer>
              {(channel) => {
                return (
                  <div>
                    User Nmae is {user} and Youtube Channel is {channel}
                  </div>
                );
              }}
            </ChannelContex.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ContexA;
