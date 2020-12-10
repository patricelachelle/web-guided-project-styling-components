import React from "react";
import styled from "styled-components";

export default function Friend({ info, action, bold }) {
  return (
    <StyledFriend bold={bold} danger={info.name === "Cora"}>
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
  color: ${(pr) => (pr.danger ? pr.theme.primaryColor : pr.theme)};
  font-weight: ${(pr) => (pr.bold ? "bold" : "initial")};
  width: 60%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 550px) {
    width: 100%;
  }

  &:hover {
    color: ${(pr) => pr.theme.secondaryColor};
    background-color: cyan;
    transition: all 0.5s ease-in-out;
  }
  transition: all 0.5s ease-in-out;

  button {
    color: ${(pr) => pr.theme.tertiaryColor};
    
  }
`;
