import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';

import Hello from './Hello';

let container = null;
beforeEach(() => {
	// setrup a DOm element as a render target
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	// cleanup on exiting 
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it('renders with or withour a name', () => {
	act(() => {
		render(<Hello/>, container);
	}); 
	expect(container.textContent).toBe('Hey, Stranger');

	act(() => {
		render(<Hello name="Jenny"/>, container);
	});
	expect(container.textContent).toBe("Hello, Jenny");

	act(() => {
		render(<Hello name="Margaret"/>, container);
	});
	expect(container.textContent).toBe("Hello, Margaret");
})