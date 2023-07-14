import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { About } from '../interfaces/about.interfance';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about:any;
  aboutText:string = '';
  headShot:string = '';
  positions:any[] = [];
  educations:any[] = [];
  serverURL = environment.server;
  // add work and education attributes for loop
  constructor(private http:HttpClient){}
   
  ngOnInit(): void {
    this.http.get<About>(this.serverURL + '/api/about?populate=*').subscribe(res => {
      console.log(res)
      this.about = res;
      this.aboutText = res.data.attributes.AboutMe
      this.headShot = this.serverURL + res.data.attributes.MyHeadshot.data.attributes.formats.medium.url;
      this.positions = res.data.attributes.work_experiences.data
      this.educations = res.data.attributes.educations.data
    })
    
  }
}
