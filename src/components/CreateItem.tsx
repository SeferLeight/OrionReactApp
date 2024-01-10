interface ICreateItem {
	handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function CreateItem({ handleSubmit }: ICreateItem) {
	return (
		<form onSubmit={handleSubmit} aria-label='Añadir elementos'>
			<label>
				Agrega un nuevo elemento:
				<input type='text' name='item' required placeholder='Nuevo elemento' />
			</label>
			<button type='submit'>Añadir</button>
		</form>
	);
}
