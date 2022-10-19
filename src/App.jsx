import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from './notes.js';

function App() {
	return (
		<div className='outer'>
			<Header />
			<div className='note__container'>
				{notes.map(noteEntry => (
						<Note
							key={noteEntry.key}
							title={noteEntry.title}
							noteText={noteEntry.noteText.split('\n').map(str => <p>{str}</p>)}
						/>
				))}
			</div>
			<Footer />
		</div>
	);
};

export default App;