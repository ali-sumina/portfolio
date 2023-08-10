import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Projects } from '../interfaces/projectslist.interface';

@Component({
  selector: 'app-graph-project',
  templateUrl: './graph-project.component.html',
  styleUrls: ['./graph-project.component.scss']
})
export class GraphProjectComponent implements OnInit {

  projects:any = [];
  projectTitle: string = "attributes.ProjectTitle";
  projectImg:string = "attributes.ProjectDescription";
  projectDesc: string = "attributes.ProjectImage.data.attributes.formats.medium.url";
  localHost:string = 'http://localhost:1337'
  serverURL = environment.server;

  constructor (private http: HttpClient) {}


  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.http.get<Projects>(this.serverURL + '/api/projects-lists/3?populate=deep').subscribe (res => {
      console.log (res)
      this.projects = res.data.attributes.projects.data;
      // this.projectTitle = ;
      // this.projectDesc = res.data.;
      // this.projectImg = '' + res.data;
    }
    )
  }

}
