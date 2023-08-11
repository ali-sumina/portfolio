import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavPage } from '../interfaces/nav-age.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-page',
  templateUrl: './nav-page.component.html',
  styleUrls: ['./nav-page.component.scss']
})
export class NavPageComponent implements OnInit {

  navPage:any;
  phoneNum:string = '';
  email:string = '';
  phoneIcon:string = '';
  emailIcon:string = '';
  instaIcon:string = '';
  behanceIcon:string = '';
  linkedinIcon:string = '';
  logo:string = '';
  localHost:string = 'http://localhost:1337';
  serverURL = environment.server;
  productionEnv = environment.production



  constructor (private http:HttpClient) {}

  ngOnInit(): void {
    this.http.get<NavPage>(this.serverURL + '/api/page-nav?populate=*').subscribe(res => {
      console.log(res)
      this.navPage = res
      this.phoneNum = res.data.attributes.PhoneNumber;
      this.email = res.data.attributes.MyEmail;

      if (this.productionEnv == false) {
        this.phoneIcon= this.serverURL + res.data.attributes.PhoneIcon.data.attributes.url;
      } else {
        this.phoneIcon = res.data.attributes.PhoneIcon.data.attributes.url;
      }
      // this.phoneIcon = res.data.attributes.PhoneIcon.data.attributes.url;

      if (this.productionEnv == false) {
        this.emailIcon= this.serverURL + res.data.attributes.EmailIcon.data.attributes.url;
      } else {
        this.emailIcon = res.data.attributes.EmailIcon.data.attributes.url;
      }
      // this.emailIcon = res.data.attributes.EmailIcon.data.attributes.url;
      this.instaIcon = res.data.attributes.InstagramIcon.data.attributes.url;
      this.behanceIcon = res.data.attributes.BehanceIcon.data.attributes.url;
      this.linkedinIcon = res.data.attributes.LinkedinIcon.data.attributes.url;
      this.logo = res.data.attributes.Logo.data.attributes.url;
    })
  }

}
