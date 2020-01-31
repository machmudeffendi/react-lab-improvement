import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';

export default function ReactHooks(argument) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log(`Click ${count}`)
	})

	return(
		<div>
			<h1 className="mb-5">React Hooks</h1>

			<label className="d-block">State Hooks (useState):</label>
			<Button variant="info" onClick={() => setCount(count + 1)}>{count}</Button>
		</div>
	)
}