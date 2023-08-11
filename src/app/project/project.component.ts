import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projects } from '../interfaces/projectslist.interface';
import { environment } from 'src/environments/environment';

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
  serverURL = environment.server;
  productionEnv = environment.production

  constructor (private http: HttpClient) {}


  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.http.get<Projects>(this.serverURL + '/api/projects-lists/1?populate=deep').subscribe (res => {
      console.log (res)
      this.projects = res.data.attributes.projects.data;

      // if (this.productionEnv == false) {
      //   this.headShot = this.serverURL + res.data.attributes.MyHeadshot.data.attributes.formats.medium.url;
      // } else {
      //   this.headShot = res.data.attributes.MyHeadshot.data.attributes.formats.medium.url;
      // }

      // this.projectTitle = ;
      // this.projectDesc = res.data.;
      // this.projectImg = '' + res.data;
    }
    )
  }
  

}
