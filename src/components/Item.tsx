import deleteIco from '../assets/delete.svg';
interface IItem {
	text: string;
	handleClick: () => void;
}

export function Item({ text, handleClick }: IItem) {
	return (
		<li onClick={handleClick} className='item'>
			<span>{text}</span>
			<img src={deleteIco} alt='Eliminar' width={12} />
		</li>
	);
}
