import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent {
  projectsList:any;
  serverURL = environment.server;

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(this.serverURL + '/api/projects-lists/1').subscribe (res => {
      // console.log (res)
      this.projectsList = res;  
    })



  
}}
