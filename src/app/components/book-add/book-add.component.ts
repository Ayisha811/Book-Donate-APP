import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css'],
})
export class BookAddComponent implements OnInit {
  bookForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.bookForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: [''],
    });
  }
  ngOnInit() {}
  onSubmit(): any {
    this.crudService.AddBook(this.bookForm.value).subscribe(
      () => {
        console.log('data added successfully');
        this.ngZone.run(() => this.router.navigateByUrl('./books-list'));
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
