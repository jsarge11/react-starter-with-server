import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './global.scss';
import { multiply } from 'utils';

export const Main = () => {
	const [serverMessage, setServerMessage] = useState('');
	useEffect(() => {
		axios
			.get('/test')
			.then((res) => {
				setServerMessage(res.data);
			})
			.catch(() => {
				setServerMessage("I can't use that yet. [Server not working]");
			});
	}, []);

	const result = multiply(2, 6);
	return (
		<div>
			<h1 className="center">May your blades never dull.</h1>
			<p>
				{result} {`<-- That came from an alias! Go team!`}
			</p>
			<p>{serverMessage}</p>
		</div>
	);
};
