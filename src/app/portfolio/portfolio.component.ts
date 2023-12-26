import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  projects = {} as Project[];

  isCollapsed: boolean = true;

  constructor(private titleService: Title, private projectService: ProjectsService){
    titleService.setTitle("Dony Castro - Portfolio")
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
}
