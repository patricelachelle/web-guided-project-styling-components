import React from 'react'
import styled from 'styled-components'

export function Friend({ info, action }) {
  return (
    <FriendContainer className='friend'>
      {info.name}
      <button onClick={() => action(info.id)}>
        See details
      </button>
    </FriendContainer>
  )
}

export const FriendContainer = styled.div`
  background-color: ${pr => pr.theme.primaryBackground};
  color: ${pr => pr.theme.primaryText};
  padding: ${pr => pr.theme.containerPadding};
  border: 1px solid black;
  margin: 5px;
  display: flex;
  justify-content: space-between;

  @media ${pr => pr.theme.breakpointMobile} {
    background-color: black;
  }

  button {
    &:hover {
      color: red;
    }
  }
  
`
