import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateService } from '../shared/date.service';

@Component({
  selector: 'app-organaizer',
  templateUrl: './organaizer.component.html',
  styleUrls: ['./organaizer.component.css'],
})
export class OrganaizerComponent implements OnInit {
  form!: FormGroup;

  constructor(public dateService: DateService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
    });
  }
  submit() {
    const {title} = this.form.value;
  }
}
