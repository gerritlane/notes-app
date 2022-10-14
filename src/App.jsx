import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';

function App() {
	return (
		<div className='outer'>
			<Header />
			<div className='note__container'>
				<Note />
				<Note />
			</div>
			<Footer />
		</div>
	);
};

export default App;