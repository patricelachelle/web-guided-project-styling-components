import React from 'react'
import styled from 'styled-components'

export default function Friend({ info, action }) {
  return (
    <FriendContainer className='friend'>
      {info.name}
      <Button primary={false} onClick={() => action(info.id)}>
        See details
      </Button>
    </FriendContainer>
  )
}

const FriendContainer = styled.div`
padding: 5px;
`

const Button = styled.button`
background-color: ${props => props.primary ? 'pink' : 'white'};

&:hover {
  font-size: 20px;
  transition: 2s all cubic-bezier(0.78, 0.44, 0.05, 0.45);
}
`
