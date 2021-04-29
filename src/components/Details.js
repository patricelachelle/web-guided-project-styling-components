import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../constants'
import axios from 'axios'
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
    <div className='container'>
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
      <LargeButton theme="" onClick={close}>Close</LargeButton>
      <Button theme="danger">Delete</Button>
    </div>
  )
}

const Button = styled.button`
margin: 5px;
background-color: ${props => props.theme == "danger" ? "red" : "white"};
color: ${props => props.theme == "danger" ? "white" : "black"}
`
const LargeButton = styled(Button)`
width: 75px;
`