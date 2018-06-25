import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { DataService } from '../../data.service';
import { Author } from '../../author';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})

export class NewBookComponent implements OnInit {
	author: Author;
	book = {title:"", year:""};
	id: string = "";
	submit_error: string = "";
	submit_response: string = "";

	constructor(private _route: ActivatedRoute,
				private _router: Router,
				private _dataService: DataService) {
		this._route.paramMap.subscribe( 
			params => {
				this.id = params.get('id');
				this.getAuthor(this.id);
			},
			error => {
				console.log("new-book.component subscribe error: ", error);
			})

	}

	ngOnInit() {
	}

	onSubmit(event, form_data) {
		console.log("response", this.book);
		this.author.books.push(this.book);
		this._dataService.updateAuthor(this.author).subscribe(response => {
			(response.error?this.submit_error = response.error:this._router.navigate(['/']))
		});
	}

	getAuthor(id) {
		this._dataService.getAuthor(id).subscribe(author => {
			this.author = author;
		});		
	}
}