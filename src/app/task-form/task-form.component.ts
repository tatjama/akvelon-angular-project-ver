import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Project } from '../project';
import { Task } from '../task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent implements OnInit {

  task:Task = new Task();
  title:string ="Add new task";
  updatedTasks: Task[];
  updatedProject: Project;

  @Input() project:Project;
  @Output() addedTaskEvent = new EventEmitter<Project>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(title:string, description:string, estimate:number): void {
    this.task.title = title.trim();
    this.task.description = description.trim();
    this.task.estimate = estimate;
    this.task.date = new Date().toUTCString();
    this.task.projectId = this.project.id;
    if(!this.task.title){return; }

    //clone new array of tasks from tasks
    this.updatedTasks = JSON.parse(JSON.stringify(this.project.tasks));
    this.updatedTasks.push(this.task);

    //clone new object project from project
    this.updatedProject = Object.assign({}, this.project);
    this.updatedProject.tasks = this.updatedTasks;
    this.addedTaskEvent.emit(this.updatedProject);
  }
}
