import './App.css';
import { CreateItem } from './components/CreateItem';
import { Item } from './components/Item';
import { useItems } from './hooks/useItems';
import { ItemId } from './types/ItemId';

function App() {
	const { items, addItem, removeItem } = useItems();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const { elements } = event.currentTarget;
		const input = elements.namedItem('item');
		const isInput = input instanceof HTMLInputElement;
		if (!isInput || input === null) return;

		addItem(input.value);

		input.value = '';
	};

	const createHandleRemoveItem = (id: ItemId) => () => {
		removeItem(id);
	};

	return (
		<main>
			<aside>
				<h1>Prueba técnica</h1>
				<h2>Añadir elemento a la lista</h2>
				<CreateItem handleSubmit={handleSubmit} />
			</aside>
			<section>
				<h2>Listado de elementos agregados</h2>
				{items.length === 0 ? (
					<p>
						<strong>No hay elementos</strong>
					</p>
				) : (
					<ul>
						{items.map((item) => (
							<Item
								key={item.id}
								text={item.text}
								handleClick={createHandleRemoveItem(item.id)}
							/>
						))}
					</ul>
				)}
			</section>
		</main>
	);
}

export default App;
