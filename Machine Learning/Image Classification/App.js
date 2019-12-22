import React, { useState } from 'react';
import './App.css';
import photo from './assets/file.jpg';
import { loadImage } from 'canvas';
import * as mobilenet from '@tensorflow-models/mobilenet';

const App = () => {
	const [res, handleRes] = useState([]);
	const myPhoto = () => {
		return <img style={{ padding: '10px' }} id="img" src={photo} alt="foto "></img>;
	};

	const myPrediction = async () => {
		const loadModel = await mobilenet.load();
		const pic = await loadImage(photo);
		const pred = await loadModel.classify(pic);
		console.log(pred);
		handleRes(pred);
	};

	return (
		<div className="App">
			{myPhoto()}
			<button onClick={(e) => myPrediction(e)}>Predict</button>
			{res.map((e, k) => (
				<li key={k}>
					<h1>{e.className + ': ' + Math.round(e.probability * 100) + '%'}</h1>
				</li>
			))}
		</div>
	);
};

export default App;
