import React, { useState } from 'react';

import api from './services/api';

import iconLoading from './assets/icon.png';

import './global.css';
import './App.css';
import './response-design.css';

function App() {
	const [ fromMail, setFromMail ] = useState('');
	const [ toMail, setToMail ] = useState('');
	const [ subjectMail, setSubjectMail ] = useState('');
	const [ textMail, setTextMail ] = useState('');

	const [ loading, setLoading ] = useState(false);

	async function handleMail(e) {
		setLoading(true);
		e.preventDefault();

		const data = {
			fromMail,
			toMail,
			subjectMail,
			textMail
		};

		try {

			await api.post('/', data);
			setLoading(false);
			setTimeout(() => {
				return alert('Email enviado com sucesso!');
			}, 1000);
		} catch (err) {
			setLoading(false);
			setTimeout(() => {
				return alert('Erro ao enviar o email, tente novamente.');
			}, 1000);
		}
	}

	return (
		<div id="app">
			<form onSubmit={handleMail}>
				<h1>Envio de e-mail</h1>
				<input 
					type="email" 
					placeholder="Seu e-mail"
					value={fromMail}
					onChange={e => setFromMail(e.target.value)}
					required
					/>
				<input 
					type="email" 
					placeholder="Para quem mandar"
					value={toMail}
					onChange={e => setToMail(e.target.value)}
					required
					/>
				<input 
					placeholder="Título do e-mail"
					value={subjectMail}
					onChange={e => setSubjectMail(e.target.value)}
					required
					/>
				<textarea 
					placeholder="Descrição do e-mail"
					value={textMail}
					onChange={e => setTextMail(e.target.value)}
					required
					/>
				<button type="submit">Enviar Mensagem {loading && (<img src={iconLoading} alt="Loading"/>)}</button>
			</form>
		</div>
	);
}

export default App;
