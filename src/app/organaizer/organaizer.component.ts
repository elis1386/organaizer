import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateService } from '../shared/date.service';
import { Task, TasksService } from '../shared/tasks.sevices';

@Component({
  selector: 'app-organaizer',
  templateUrl: './organaizer.component.html',
  styleUrls: ['./organaizer.component.css'],
})
export class OrganaizerComponent implements OnInit {
  form!: FormGroup;
  tasks: Task[] = [];

  constructor(
    public dateService: DateService,
    private tasksService: TasksService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
    });
  }
  submit() {
    const { title } = this.form.value;

    const task: Task = {
      title,
      date: this.dateService.date.value.format('DD-MM-YYYY'),
    };

    this.tasksService.create(task).subscribe(
      (task) => {
        this.tasks.push(task);
        this.form.reset();
      },
      (err) => console.error(err)
    );
    console.log(task);
  }
}
