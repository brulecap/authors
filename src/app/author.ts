export class Author {
	public _id: string = ""; // Created by Mongoose. Ignored if provided.
	public first_name: string = ""; // Required, minimum 2 characters
	public last_name: string = ""; // Required, minimum 2 characters
	public birthyear: number; // Required number
	public deathyear: number; // Optional, if included must be greater than birthyear and age at death must be less than 150.
	public country: string = ""; // Required, minimum 3 characters
	public books: Array<any> = []; // Optional with a BIG caveat.
//		books is an array of book objects as follows:
//			{title: string, // Required, minimum 2 characters
//			year: number} // Required, must be in the past
	public created_at: Date = new Date(); // Created by Mongoose. Ignored if provided
	public updated_at: Date = new Date(); // Created and updated by Mongoose. Ignored if provided

	constructor(){}
}