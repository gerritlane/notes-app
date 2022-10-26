import React, { useState } from 'react';

function NoteInput (props) {
	const [noteDetails, setNoteDetails] = useState({
		titleInput: "",
		textInput: ""
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setNoteDetails(prevValue=>{
			return {
				...prevValue,
				[name]: value
			};
		});
	};

	return (
		<div className='note input'>
			<input 
				className='note__title-input' 
				name='titleInput' 
				value={noteDetails.titleInput} 
				placeholder="Title"
				onChange={handleChange}
			></input>
			<textarea 
				rows='5' 
				className='note__text-input' 
				name='textInput' 
				value={noteDetails.textInput}
				placeholder="Note Text"
				onChange={handleChange}
			></textarea>
			<button className='note__addButton' onClick={()=>{
				props.onAdd(noteDetails);
				setNoteDetails({
					titleInput: "",
					textInput: ""
				});
			}}>+</button>
		</div>
	);
};

export default NoteInput;