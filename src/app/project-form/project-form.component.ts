import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//Service
import { ProjectService } from '../project.service';

//Interfaces
import { Project } from '../project';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  addedProject: Project = new Project();
  title: String ="Add new project";

  @Input() projects: Project[];
  @Output() addedProjectEvent = new EventEmitter();

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  add(): void {
    this.addedProject.date = new Date().toLocaleDateString().slice(0,10).replace(/\//g, ".");
    this.addedProject.tasks = [];
    if(!this.addedProject.name){ return; }

    this.projectService.addProject(this.addedProject)
    .subscribe(project =>this.projects.push(project));
    this.addedProjectEvent.emit();
  }
}
