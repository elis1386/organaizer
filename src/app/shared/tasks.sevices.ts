import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Task {
  title: string;
  date: string;
}

@Injectable({ providedIn: 'root' })
export class TasksService {
  static url =
    'https://organaizer-44c64-default-rtdb.europe-west1.firebasedatabase.app/tasks';

  constructor(private http: HttpClient) {}
  create(task: Task): Observable<Task>{
   return this.http.post<any>(`${TasksService.url}/${task.date}.json`, task).pipe(
      map((res) => {
        return res
      })
    );
  }
}
