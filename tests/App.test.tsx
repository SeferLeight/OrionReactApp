import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';

describe('App', () => {
	test('should render', () => {
		render(<App />);
		expect(screen.getByText('Prueba técnica')).toBeDefined();
	});
	test('should add new item and remove then', async () => {
		const user = userEvent.setup();

		const input = screen.getByRole('textbox');
		expect(input).toBeDefined();

		const form = screen.getByRole('form');
		expect(form).toBeDefined();

		const addButton = form.querySelector('button');
		expect(addButton).toBeDefined();

		const randomText1 = crypto.randomUUID();
		await user.type(input, randomText1);
		await user.click(addButton!);

		const list = screen.getByRole('list');
		expect(list).toBeDefined();
		expect(list.childNodes.length).toBe(1);

		const item = screen.getByText(randomText1);
		expect(item).toBeDefined();

		await user.click(item!);
		const noResults = screen.getByText('No hay elementos');
		expect(noResults).toBeDefined();
	});
});
