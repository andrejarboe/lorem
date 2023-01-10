import React, { useState } from 'react';
import data from './data';
function App() {
	const [count, setCount] = useState(0);
	const [text, setText] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('hello');
	};

	return (
		<section className="section-center">
			<h3>Tired of boring lorem ipum?</h3>
			<form className="lorem-form" onSubmit={handleSubmit}>
				<label htmlFor="amount">paragraphs:</label>
				<input
					type="number"
					name="amount"
					id="amount"
					value={count}
					onChange={(e) => setCount(e.target.value)}
				/>
				<button type="submit" className="btn">
					generate
				</button>
			</form>

				<article className="lorem-text">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis velit
						voluptate laborum, sint veniam et aliquid doloremque dolor nisi,
						debitis sed eaque laudantium ad labore obcaecati, numquam culpa illo
						praesentium?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis velit
						voluptate laborum, sint veniam et aliquid doloremque dolor nisi,
						debitis sed eaque laudantium ad labore obcaecati, numquam culpa illo
						praesentium?
					</p>
        <p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis velit
						voluptate laborum, sint veniam et aliquid doloremque dolor nisi,
						debitis sed eaque laudantium ad labore obcaecati, numquam culpa illo
						praesentium?
					</p>
				</article>
		</section>
	);
}

export default App;
