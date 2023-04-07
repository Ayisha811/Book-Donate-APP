import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import { BookdetailComponent } from './components/bookdetail/bookdetail.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'add-book', pathMatch: 'full'
  },
  {
    path: 'book-list', component: BookListComponent
  },
  {
    path: 'add-book', component: BookAddComponent
  },
  {
    path: 'edit-book/id', component: BookdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
