import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavPage } from '../interfaces/nav-age.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  title = 'portfolio';

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
  homeNav = 'show';
  mainNav = 'hide';






  constructor (private http:HttpClient) {}

  ngOnInit(): void {
    this.http.get<NavPage>('http://localhost:1337/api/page-nav?populate=*').subscribe(res => {
      console.log(res)
      this.navPage = res
      this.phoneNum = res.data.attributes.PhoneNumber;
      this.email = res.data.attributes.MyEmail;
      this.phoneIcon = res.data.attributes.PhoneIcon.data.attributes.url;
      this.emailIcon = res.data.attributes.EmailIcon.data.attributes.url;
      this.instaIcon = res.data.attributes.InstagramIcon.data.attributes.url;
      this.behanceIcon = res.data.attributes.BehanceIcon.data.attributes.url;
      this.linkedinIcon = res.data.attributes.LinkedinIcon.data.attributes.url;
      this.logo = res.data.attributes.Logo.data.attributes.url;
    })
  }

  hideAppRoot() {
    console.log("Works")
    this.homeNav = 'hide';
    this.mainNav = 'show';
}
}
