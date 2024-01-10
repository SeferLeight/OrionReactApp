import { useState } from 'react';
import { Item } from '../interfaces/Item';

export const useItems = () => {
	const [items, setItems] = useState<Item[]>([]);
	const addItem = (text: string) => {
		const newItem: Item = {
			text,
			id: crypto.randomUUID(),
			timestamp: new Date(),
		};
		setItems((prevItems) => [...prevItems, newItem]);
	};

	const removeItem = (id: string) => {
		setItems((prevItems) => prevItems.filter((item) => item.id !== id));
	};

	return {
		items,
		addItem,
		removeItem,
	};
};
