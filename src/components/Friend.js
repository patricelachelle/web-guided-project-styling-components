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
  color: ${pr => pr.theme.}
  font-weight: bold;
  width: 60%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 550px) {
    width: 100%;
  }

  &:hover {
    color: green;
  }

  button {
    color: grey;
  }
`;
