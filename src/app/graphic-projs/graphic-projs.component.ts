import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-graphic-projs',
  templateUrl: './graphic-projs.component.html',
  styleUrls: ['./graphic-projs.component.scss']
})
export class GraphicProjsComponent implements OnInit {
  projectsList:any;
  serverURL = environment.server;

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(this.serverURL + '/api/projects-lists/3?populate=*').subscribe (res => {
      // console.log (res)
      this.projectsList = res;  
    })

  }
}
