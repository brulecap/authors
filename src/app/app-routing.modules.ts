import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { BookComponent } from './book/book.component';
import { NewBookComponent } from './book/new-book/new-book.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';

/*
	Routes... 
*/
const routes: Routes = [
	// Home page
	{path: 'authors', pathMatch: 'full', component: HomeComponent},
	// New author
	{path: 'authors/new', component: NewComponent},
	// Edit author
	{path: 'authors/edit/:id', component: EditComponent},
	// Book pages
	{path: 'authors/book', component: BookComponent, children:[
		// Edit book
		{ path: 'edit/:id/:book', component: EditBookComponent },
		{ path: 'new/:id', component: NewBookComponent }
    ]}
    ]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }