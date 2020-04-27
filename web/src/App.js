import React from 'react';

import './global.css';

function App() {

	return (
		<div id="app">
			<form>
				<input type="email" />
				<input type="email" />
				<input placeholder="Título do e-mail" />
				<input placeholder="Descrição do e-mail" />
				<button type="submit">Enviar Mensagem</button>
			</form>
		</div>
	);
}

export default App;
