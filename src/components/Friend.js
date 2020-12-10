import React from "react";
import styled from "styled-components";

export default function Friend({ info, action }) {
  return (
    < className="friend">
      {info.name}
      <button onClick={() => action(info.id)}>See details</button>
    </>
  );
}

// OUTSIDE of the FRIEND component
const StyledFriend = styled.div`
  color: red;
  font-weight: bold;
`;
