import React from 'react'
import PianoWrapper from '../UI/PianoWrapper'
import NoteContainer from './NoteContainer'
import PianoDashboard from './PianoDashboard'
import * as Tone from 'tone'

const synth = new Tone.Synth().toDestination();

const playNaturalNote = (note) => {
  synth.triggerAttackRelease(note, '8n');
  console.log(note);
}
const playSharpNote = (sharpNote) => {
  synth.triggerAttackRelease(sharpNote, '8n');
  console.log(sharpNote);
}

const PIANO_SCALE = [
  {
    id: 'x0',
    naturalNote: 'C4',
    sharpNote: 'Db4'
  },
  {
    id: 'x1',
    naturalNote: 'D4',
    sharpNote: 'Eb4'
  },
  {
    id: 'x2',
    naturalNote: 'E4'
  },
  {
    id: 'x3',
    naturalNote: 'F4',
    sharpNote: 'Gb4'
  },
  {
    id: 'x4',
    naturalNote: 'G4',
    sharpNote: 'Ab4'
  },
  {
    id: 'x5',
    naturalNote: 'G4',
    sharpNote: 'Ab4'
  },
  {
    id: 'x6',
    naturalNote: 'B4'
  },
]

const Piano = () => {
  return (
    <PianoWrapper>
      <PianoDashboard>
        {PIANO_SCALE.map(key => (
          <NoteContainer 
            id={key.id}
            playNaturalNote={() => playNaturalNote(key.naturalNote)}
            playSharpNote={() => playSharpNote(key.sharpNote)}
            sharpNote={key.sharpNote}
          />
        ))}
      </PianoDashboard>
    </PianoWrapper>
  )
}

export default Piano
