import React from 'react'
import styled from 'styled-components'

export default function Friend({ info, action }) {
  return (
    <FriendRow>
      {info.name}
      <Button onClick={() => action(info.id)}>
        See details
      </Button>
    </FriendRow>
  )
}

const FriendRow = styled.div`
margin: 5px;
display: flex;
justify-content: space-between;
width: 200px;
`

const Button = styled.div`
text-decoration: underline;
width: 100px;
cursor: pointer;
&:hover {
  transition: all 0.9s cubic-bezier(0.9, 0.49, 0.08, 0.57);
  font-size: 20px;
}
`