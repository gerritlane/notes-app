import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import savedNotes from './notes.js';
import NoteInput from './NoteInput';

function App() {
	// TODO:	Destructure savedNotes
	const [notes, setNotes] = useState(savedNotes);
	function addNote(noteDetails) {
		console.log(noteDetails);

		setNotes(prevValues=>{
			const newNote = {
				title:	noteDetails.titleInput,
				noteText: noteDetails.textInput
			}
			return [...prevValues, newNote];
		})
	};
	
	function deleteNote(id) {
		setNotes((prevValues) => {
      return prevValues.filter((item, index) => {
        return index !== id;
      });
    });
	}
	
	return (
		<div className='outer'>
			<Header />
			<div className='note__container'>
				<NoteInput 
					onAdd={addNote}
				/>
				{notes.map((noteEntry, index) => (
						<Note
							key={index}
							id={index}
							title={noteEntry.title}
							noteText={noteEntry.noteText.split('\n').map((str, index) => <p key={index}>{str}</p>)}
							onDelete={deleteNote}
						/>
				))}
			</div>
			<Footer />
		</div>
	);
};

export default App;