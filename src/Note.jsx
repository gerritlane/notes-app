import React from 'react';

function Note (props) {
	return (
		<div className='note'>
			<div className='note__title'>{props.title}</div>
			<div className='note__text'>{props.noteText}</div>
		</div>
	);
};

export default Note;