import React, { useState } from 'react';
import data from './data';
function App() {
	const [count, setCount] = useState(0);
	const [text, setText] = useState([]);
	const [isError, setError] = useState(false);

	const handleSubmit = (e) => {
    e.preventDefault();
    
    
		//original count is a string
		let amount = parseInt(count);
    
		if (count <= 0) {
      amount = 1;
    }

    if (count > 8) {
      amount = 8;
    }

    // check error 
    if (count > 8) {
      setError(true);
    } else { 
      setError(false);
    }
    

		setText(data.slice(0, amount));
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
			<h4 className={`error ${isError ? null : 'error-hide'} `}>max is 8</h4>

			<article className="lorem-text">
				{text.map((item, index) => {
					return <p key={index}>{item}</p>;
				})}
			</article>
		</section>
	);
}

export default App;
