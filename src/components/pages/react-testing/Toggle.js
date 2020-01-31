import React, { useState } from 'react';

export default function Toogle(props) {
	const [state, setState] = useState(false);

	return(
		<button onClick={() => setState(!state)} data-testid="toggle">
			{ state ? "Turn off" : "Turn on" }
		</button>
	)
}