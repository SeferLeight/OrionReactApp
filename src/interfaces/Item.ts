import { ItemId } from '../types/ItemId';

export interface Item {
	id: ItemId;
	timestamp: Date;
	text: string;
}
