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

const Piano = () => {
  return (
    <PianoWrapper>
      <PianoDashboard>
        <NoteContainer 
          note='C4' 
          sharpNote='C5' 
          playSharpNote={() => playSharpNote('Db4')}
          playNaturalNote={() => playNaturalNote('C4')}
        />
        <NoteContainer 
          note='D4' 
          sharpNote={true} 
          playSharpNote={() => playSharpNote('Eb4')}
          playNaturalNote={() => playNaturalNote('D4')}
        />
        <NoteContainer 
          note='E4' 
          playNaturalNote={() => playNaturalNote('E4')}
        />
        <NoteContainer 
          note='F4' 
          sharpNote={true} 
          playSharpNote={() => playSharpNote('Gb4')}
          playNaturalNote={() => playNaturalNote('F4')}
        />
        <NoteContainer 
          note='G4' 
          sharpNote={true} 
          playSharpNote={() => playSharpNote('Ab4')}
          playNaturalNote={() => playNaturalNote('G4')}
        />
        <NoteContainer 
          note='A4' 
          sharpNote={true} 
          playSharpNote={() => playSharpNote('Bb4')}
          playNaturalNote={() => playNaturalNote('A4')}
        />
        <NoteContainer 
          note='B4' 
          playNaturalNote={() => playNaturalNote('B4')}
        />
      </PianoDashboard>
    </PianoWrapper>
  )
}

export default Piano
