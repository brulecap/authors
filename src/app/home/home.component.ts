import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';
import { Author } from '../author';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	authors: Array<Author> = [];
	author: Author = null;
	submit_error: string = "";
	submit_response: string = "";
    searchText: string = "";
	constructor(private _router: Router,
				private _dataService: DataService) { }

	ngOnInit() {
		this.getAuthors();
	}

	onDelete(event,author_id, book_index = null) {
		event.preventDefault();
		console.log("onDelete", author_id, book_index);
		if (book_index === null) {
			// Deleting author
			console.log("null");
			this._dataService.deleteAuthor(author_id).subscribe(response => {
				(response.error?this.submit_error = response.error:(this.getAuthors(), this._router.navigate(['/'])))
			});
		} else {
			// Deleting book. Get author, remove book, and update author.
			this._dataService.getAuthor(author_id).subscribe(author => {
				this.author = author;
				this.author.books.splice(book_index, 1);
				this._dataService.updateAuthor(this.author).subscribe(response => {
					(response.error?this.submit_error = response.error:(this.getAuthors(), this._router.navigate(['/'])))
				});
			});		
			console.log("Delete book", book_index);
		}
	}

	getAuthors() {
		this._dataService.getAuthors().subscribe(authors => {
			this.authors = authors;
		});		
	}
}