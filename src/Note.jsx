import React from 'react';

function Note (props) {
	return (
		<div className='note'>
			<div className='note__title'>{props.title}</div>
			<div className='note__text'>{props.noteText}</div>
			<button className='note__deleteButton' onClick={()=> {
				props.onDelete(props.id);
			}}>Delete</button>
		</div>
	);
};

export default Note;