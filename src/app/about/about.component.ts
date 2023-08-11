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
  UIskills:any[] = [];
  UItools:any[] = [];
  UXskills:any[] = []
  UXtools:any[] = []
  devSkills:any[] = [];
  devTools:any[] = []

  hide = "display: none"

  loading = true;


  serverURL = environment.server;
  productionEnv = environment.production
  // add work and education attributes for loop
  constructor(private http:HttpClient){}
   
  ngOnInit(): void {
    setTimeout(() => {
    this.http.get<About>(this.serverURL + '/api/about?populate=deep').subscribe(res => {
        this.loading = false;
        this.hide = '';
        console.log(res)
        this.about = res;
        this.aboutText = res.data.attributes.AboutMe
  
        if (this.productionEnv == false) {
          this.headShot = this.serverURL + res.data.attributes.MyHeadshot.data.attributes.formats.medium.url;
        } else {
          this.headShot = res.data.attributes.MyHeadshot.data.attributes.formats.medium.url;
        }
        
  
  
        this.positions = res.data.attributes.work_experiences.data
        this.educations = res.data.attributes.educations.data
  
        this.UIskills = res.data.attributes.skill_set.data.attributes.ui_skill.data.attributes.Skill
        this.UItools = res.data.attributes.skill_set.data.attributes.ui_skill.data.attributes.Tool
  
        this.UXskills = res.data.attributes.skill_set.data.attributes.ux_skill.data.attributes.Skill
        this.UXtools = res.data.attributes.skill_set.data.attributes.ux_skill.data.attributes.Tool
  
        this.devSkills = res.data.attributes.skill_set.data.attributes.web_dev_skill.data.attributes.Skill
        this.devTools = res.data.attributes.skill_set.data.attributes.web_dev_skill.data.attributes.Tool
      })

    }, 1000)
    
  }
}
