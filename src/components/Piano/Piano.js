import React from 'react'
import PianoWrapper from '../UI/PianoWrapper'
import NoteContainer from './NoteContainer'
import PianoDashboard from './PianoDashboard'
import * as Tone from 'tone'

const synth = new Tone.Synth().toDestination();

const playNaturalNote = (note) => {
  synth.triggerAttackRelease(note, '8n');
}
const playSharpNote = (sharpNote) => {
  synth.triggerAttackRelease(sharpNote, '8n');
}

const PIANO_SCALE = [
  {
    id: 0,
    naturalNote: 'C4',
    sharpNote: 'Db4'
  },
  {
    id: 1,
    naturalNote: 'D4',
    sharpNote: 'Eb4'
  },
  {
    id: 2,
    naturalNote: 'E4',
    sharpNote: false
  },
  {
    id: 3,
    naturalNote: 'F4',
    sharpNote: 'Gb4'
  },
  {
    id: 4,
    naturalNote: 'G4',
    sharpNote: 'Ab4'
  },
  {
    id: 5,
    naturalNote: 'A4',
    sharpNote: 'Bb4'
  },
  {
    id: 6,
    naturalNote: 'B4',
    sharpNote: false
  },
]

const Piano = () => {
  return (
    <PianoWrapper>
      <PianoDashboard>
        {PIANO_SCALE.map(key => (
          <NoteContainer 
            id={key.id}
            playNaturalNote={playNaturalNote}
            playSharpNote={playSharpNote}
            naturalNote={key.naturalNote}
            sharpNote={key.sharpNote}
          />
        ))}
      </PianoDashboard>
    </PianoWrapper>
  )
}

export default Piano
