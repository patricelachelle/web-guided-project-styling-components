import React from 'react'
import styled from 'styled-components'

export default function Friend({ info, action }) {
  return (
    <FriendRow>
      {info.name}
      <DetailsLink onClick={() => action(info.id)}>
        See details
      </DetailsLink>
    </FriendRow>
  )
}

const FriendRow = styled.div`
display: flex;
justify-content: space-between;
width: 30%;
`

const DetailsLink = styled.div`
text-decoration: underline;
margin: 5px;
cursor: pointer;

&:hover {
  font-size: 20px;
  transition: 0.5s all ease-in-out;
}
`