import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent implements OnInit {
  projectsList:any;
  serverURL = environment.server;
  loading = true;

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    setTimeout(()=> {
      this.http.get<any>(this.serverURL + '/api/projects-lists/1?populate=deep').subscribe (res => {
        // console.log (res)
        this.loading = false;
        this.projectsList = res;  
      })
    }, 1000)
    



  
}}
