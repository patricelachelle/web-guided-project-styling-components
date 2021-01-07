import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../constants'
import axios from 'axios'
import { Container } from './Friend'
import styled from 'styled-components'

export default function Details(props) {
  const { friendId, close } = props
  const [details, setDetails] = useState(null)

  useEffect(() => {
    axios.get(`${BASE_URL}/friends/${friendId}?api_key=${API_KEY}`)
      .then(res => { setDetails(res.data) })
      .catch(err => { debugger }) // eslint-disable-line
  }, [friendId])

  return (
    <DetailContainer className='container'>
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
      <button onClick={close}>Close</button>
    </DetailContainer>
  )
}

const DetailContainer = styled(Container)`
  display: block;

  button {
    margin-top: 10px;
  }
  p {
    color: red;
  }
`