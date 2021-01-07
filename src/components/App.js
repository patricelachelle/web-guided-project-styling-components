import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { BASE_URL, API_KEY } from '../constants'
import Details from './Details'
import { Friend } from './Friend'

export default function App() {
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
    <div className='container'>
      <h1>My friends:</h1>
      {
        friends.map(fr => {
          return <Friend key={fr.id} info={fr} action={openDetails} />
        })
      }
      {
        currentFriendId && <Details friendId={currentFriendId} close={closeDetails} />
      }
    </div>
  )
}

// const Container = styled.div`
//   background-color: cornsilk
// `

// const Button = styled.button`
//   background-color: ${props => props.primary ? 'pink' : 'black'};
//   color: white;
// `
