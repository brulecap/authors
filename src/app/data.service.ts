import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';

import { Author } from './author';


@Injectable()
export class DataService {
	base = "http://localhost:8000/books_api/";

	constructor(private _http: HttpClient) {
		if (environment.production) {
			this.base = "https://brucelecaptain.com/books_api/";
		}
	}

	getAuthors(id=""): Observable<any> {
		return this._http.get(`${this.base}authors/`);
	}
	getAuthor(id: string): Observable<any> {
		return this._http.get(`${this.base}authors/${id}`);
	}
	deleteAuthor(id: string): Observable<any> {
		return this._http.delete(`${this.base}authors/${id}`);
	}
	updateAuthor(author: Author): Observable<any> {
		return this._http.put(`${this.base}authors/${author._id}/`, author);
	}
	createAuthor(author: Author): Observable<any> {
		return this._http.post(`${this.base}authors/`, author);
	}
}