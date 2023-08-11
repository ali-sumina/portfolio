import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-design-projs',
  templateUrl: './design-projs.component.html',
  styleUrls: ['./design-projs.component.scss']
})
export class DesignProjsComponent implements OnInit{

  projectsList:any;
  serverURL = environment.server;

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(this.serverURL + '/api/projects-lists/2?populate=deep').subscribe (res => {
      // console.log (res)
      this.projectsList = res;  
    })

  }
}
