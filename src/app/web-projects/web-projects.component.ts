import { Component, OnInit } from '@angular/core';
import { Projects } from '../interfaces/projectslist.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-web-projects',
  templateUrl: './web-projects.component.html',
  styleUrls: ['./web-projects.component.scss']
})
export class WebProjectsComponent implements OnInit{

  projects:any = [];
  projectTitle: string = "attributes.ProjectTitle";
  projectImg:string = "attributes.ProjectDescription";
  projectDesc: string = "attributes.ProjectImage.data.attributes.formats.medium.url";
  localHost:string = 'http://localhost:1337'
  serverURL = environment.server;

  loading = true;

  constructor (private http: HttpClient) {}


  ngOnInit(): void {

    this.http.get<Projects>(this.serverURL + '/api/projects-lists/2?populate=deep').subscribe (res => {
      this.loading = false;
      console.log (res)
      this.projects = res.data.attributes.projects.data;
    // throw new Error('Method not implemented.');

      // this.projectTitle = ;
      // this.projectDesc = res.data.;
      // this.projectImg = '' + res.data;
    }
    )
  }

}
