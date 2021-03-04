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
      <Button type="primary" isBig onClick={close}>Close</Button>
      <Button type="warning" onClick={close}>Edit</Button>
      <Button type="danger" onClick={close}>Delete</Button>

    </DetailsContainer>
  )
}

const Button = styled.button`
width: 75px;
height:25px;
margin: 5px;
${props => props.isBig ? `width: 100px;` : `width: 75px;`}
${props => props.type === "primary" && `background-color: #a4a4ff;`}
${props => props.type === "warning" && `background-color: #ffefa4;`}
${props => props.type === "danger" && `background-color: #ffa4ad;`}
`

const DetailsContainer = styled(Container)`
display: flex;
justify-content: center;
flex-direction: column;
width: 25%;
margin: 10px;
`