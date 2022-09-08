import React from 'react'
import PianoWrapper from '../UI/PianoWrapper'
import NaturalNote from './NaturalNote'
import PianoDashboard from './PianoDashboard'

const Piano = () => {
  return (
    <PianoWrapper>
      <PianoDashboard>
        <NaturalNote sharpNote={true} />
        <NaturalNote sharpNote={true} />
        <NaturalNote />
        <NaturalNote sharpNote={true} />
        <NaturalNote sharpNote={true} />
        <NaturalNote sharpNote={true} />
        <NaturalNote />
      </PianoDashboard>
    </PianoWrapper>
  )
}

export default Piano
