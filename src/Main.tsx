import * as React from 'react';
import axios from 'axios';
import './global.scss';

const { useEffect } = React;

export const Main = () => {
	useEffect(() => {
		axios
			.get('/test')
			.then((res) => {
				alert(res.data);
			})
			.catch(() => {
				alert('Call to server failed, fool!');
			});
	}, []);

	return <h1 className="main">And we're still kickin' ass!</h1>;
};
