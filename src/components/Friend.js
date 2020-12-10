import React from "react";
import styled from "styled-components";

export default function Friend({ info, action }) {
  return (
    <StyledFriend className="friend">
      {info.name}
      <button onClick={() => action(info.id)}>See details</button>
    </StyledFriend>
  );
}

// OUTSIDE of the FRIEND component
const StyledFriend = styled.div`
  color: red;
  font-weight: bold;
  width: 60%;
  display: flex;
  justify-content: space-between;

  &:hover {
    color: green;
  }
`;
