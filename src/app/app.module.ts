import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.modules';
import { HttpClientModule } from '@angular/common/http';

import { FilterPipe }from './filter.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { DataService } from './data.service';
import { BookComponent } from './book/book.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import { NewBookComponent } from './book/new-book/new-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewComponent,
    EditComponent,
    BookComponent,
    EditBookComponent,
    NewBookComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }