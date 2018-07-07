import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { DataService } from '../../data.service';
import { Author } from '../../author';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
	author: Author;
	id: string = "";
	book_index: string = "";
	book = {title:"", year:""};
	submit_error: string = "";

	constructor(private _route: ActivatedRoute,
				private _router: Router,
				private _dataService: DataService) {
		this._route.paramMap.subscribe( 
			params => {
				this.id = params.get('id');
				this.book_index = params.get('book');
				this.getAuthor(this.id);
			},
			error => {
				console.log("new-book.component subscribe error: ", error);
			})

	}

	ngOnInit() {
	}

	onSubmit(event, form) {
		event.preventDefault();
		this.author.books[this.book_index].title = this.book.title;
		this.author.books[this.book_index].year = this.book.year;
		this._dataService.updateAuthor(this.author).subscribe(response => {
			(response.error?this.submit_error = response.error:this._router.navigate(['/']))
		});
	}

	getAuthor(id) {
		this._dataService.getAuthor(id).subscribe(author => {
			this.author = author;
			this.book.title = this.author.books[this.book_index].title;
			this.book.year = this.author.books[this.book_index].year;
		});		
	}

}
