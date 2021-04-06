import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  task:Task = new Task();
  title:string ="Add new task";
  @Input() tasks:Task[];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(title:string, description:string, estimate:number): void {
    this.task.title = title.trim();
    this.task.description = description.trim();
    this.task.estimate = estimate;
    console.log(this.task)
    if(!this.task.title){return; }
    console.log(this.tasks)
  }
}
