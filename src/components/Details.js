import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../constants'
import axios from 'axios'
import styled from 'styled-components'

import { Container } from './styled/Container'

export default function Details(props) {
  const { friendId, close } = props
  const [details, setDetails] = useState(null)

  useEffect(() => {
    axios.get(`${BASE_URL}/friends/${friendId}?api_key=${API_KEY}`)
      .then(res => { setDetails(res.data) })
      .catch(err => { debugger }) // eslint-disable-line
  }, [friendId])

  return (
    <DetailsContainer>
      <h2>Details:</h2>
      {
        details &&
        <>
          <p>{details.name} is {details.age}</p>
          <p>email is {details.email}</p>
          {name} likes:
          <ul>
            {
              details.hobbies.map((like, idx) => <li key={idx}>{like}</li>)
            }
          </ul>
        </>
      }
      <Button onClick={close}>Close</Button>
      <Button type="danger">Delete</Button>
      <Button type="warning">Edit</Button>
    </DetailsContainer>
  )
}

const Button = styled.button`
width: 75px;
height:75px;
margin: 5px;
${props => props.type === "danger" && `background: #fa5e5e`}
${props => props.type === "warning" && `background: #ffffae`}

`

const DetailsContainer = styled(Container)`
width: 300px;
height: 400px;
`