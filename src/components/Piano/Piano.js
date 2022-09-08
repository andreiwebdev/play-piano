import React from 'react'
import PianoWrapper from '../UI/PianoWrapper'
import Clap from './Clap'
import PianoDashboard from './PianoDashboard'

const Piano = () => {
  return (
    <PianoWrapper>
      <PianoDashboard>
        <Clap />
        <Clap />
        <Clap />
        <Clap />
        <Clap />
        <Clap />
        <Clap />
      </PianoDashboard>
    </PianoWrapper>
  )
}

export default Piano
