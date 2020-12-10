import React from "react";
import styled from "styled-components";

export default function Friend({ info, action }) {
  return (
    <StyledFriend>
      {info.name}
      <button onClick={() => action(info.id)}>See details</button>
    </StyledFriend>
  );
}

// OUTSIDE of the FRIEND component
// const Button = styled.button`
//   color: pink;
// `;

const StyledFriend = styled.div`
  color: red;
  font-weight: bold;
  width: 60%;
  display: flex;
  justify-content: space-between;

  &:hover {
    color: green;
  }

  button {
    color: grey;
  }
`;
