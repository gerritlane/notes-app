import React from 'react';

function NoteInput () {
	return (
		<div className='note input'>
			<input className='note__title-input' placeholder="Title"></input>
			<textarea rows='5' className='note__text-input' placeholder="Note Text"></textarea>
			<button className='note__addButton'>+</button>
		</div>
	);
};

export default NoteInput;