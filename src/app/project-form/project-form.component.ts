import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  project: Project = new Project();
  title: String ="Add new project";

  @Input() projects: Project[];
  @Output() addedProjectEvent = new EventEmitter();

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  add(name:string): void {
    name = name.trim();
    this.project.name = name;
    this.project.date = new Date().toUTCString();
    this.project.tasks = [];
    if(!name){ return; }

    this.projectService.addProject(this.project)
    .subscribe(project =>this.projects.push(project));
    this.addedProjectEvent.emit();
  }
}
