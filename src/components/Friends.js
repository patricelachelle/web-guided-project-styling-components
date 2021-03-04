import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { BASE_URL, API_KEY } from '../constants'

import Details from './Details'
import Friend from './Friend'
import { Container } from './styled/Container'

export default function Friends() {
  const [friends, setFriends] = useState([])
  const [currentFriendId, setCurrentFriendId] = useState('1')

  const openDetails = id => {
    setCurrentFriendId(id)
  }

  const closeDetails = () => {
    setCurrentFriendId(null)
  }

  useEffect(() => {
    axios.get(`${BASE_URL}/friends?api_key=${API_KEY}`)
      .then(res => {
        setFriends(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <Container>
      <h1>My friends:</h1>
      {
        friends.map(fr => {
          return <Friend key={fr.id} info={fr} action={openDetails} />
        })
      }
      {
        currentFriendId && <Details friendId={currentFriendId} close={closeDetails} />
      }
    </Container>
  )
}