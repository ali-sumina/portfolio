import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projects } from '../interfaces/projectslist.interface';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects:any = [];
  projectTitle: string = "attributes.ProjectTitle";
  projectImg:string = "attributes.ProjectDescription";
  projectDesc: string = "attributes.ProjectImage.data.attributes.formats.medium.url";
  localHost:string = 'http://localhost:1337'

  constructor (private http: HttpClient) {}


  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.http.get<Projects>('http://localhost:1337/api/projects?populate=*').subscribe (res => {
      console.log (res)
      this.projects = res.data;
      // this.projectTitle = ;
      // this.projectDesc = res.data.;
      // this.projectImg = '' + res.data;
    }
    )
  }
  

}
