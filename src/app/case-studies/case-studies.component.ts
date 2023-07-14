import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent {
  projectsList:any;

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:1337/api/projects-lists/1').subscribe (res => {
      // console.log (res)
      this.projectsList = res;  
    })



  
}}
