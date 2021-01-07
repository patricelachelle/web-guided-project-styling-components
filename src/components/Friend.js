import React from 'react'
import styled from 'styled-components'

export function Friend({ info, action }) {
  return (
    <Container>
      <span>{info.name}</span>
      <button onClick={() => action(info.id)}>
        See details
      </button>
    </Container>
  )
}

export const Container = styled.div`
  color: ${pr => pr.theme.primaryText};
  background-color: ${pr => pr.theme.containerColor};
  padding: 30px;
  border: 1px solid black;
  margin: 15px;
  display: inline-grid;

  @media ${(pr) => pr.theme.breakpointMobile} {
    display: flex;
    justify-content: space-between;
  }

  span {
    margin-bottom: 15px;
    text-align: center;
  }

  button {
    &:hover {
      transform: scale(1.1);
      transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
  }
`