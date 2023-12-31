import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavPage } from '../interfaces/nav-age.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  title = 'portfolio';
  serverURL = environment.server;
  productionEnv = environment.production

  navPage:any;
  phoneNum:string = '';
  email:string = '';
  behanceLink = ''
  linkedinLink = '';
  instagramLink = '';
  phoneIcon:string = '';
  emailIcon:string = '';
  instaIcon:string = '';
  behanceIcon:string = '';
  linkedinIcon:string = '';
  logo:string = '';
  localHost:string = 'http://localhost:1337';
  homeNav = 'show';
  mainNav = 'hide';
  loading = true;
  hideY = "hideY"

  // timeout(){
  //   setTimeout(() => {})
  // }


  constructor (private http:HttpClient) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.http.get<NavPage>(this.serverURL + '/api/page-nav?populate=*').subscribe(res => {
        this.loading = false;
        this.hideY = 'showY';
        console.log(res)
        this.navPage = res
        this.phoneNum = res.data.attributes.PhoneNumber;
        this.email = res.data.attributes.MyEmail;
        this.behanceLink = res.data.attributes.BehanceLink;
        this.linkedinLink = res.data.attributes.LinkedinLink;
        this.instagramLink = res.data.attributes.InstagramLink;
  
        if (this.productionEnv == false) {
          this.phoneIcon= this.serverURL + res.data.attributes.PhoneIcon.data.attributes.url;
        } else {
          this.phoneIcon = res.data.attributes.PhoneIcon.data.attributes.url;
        }
  
        if (this.productionEnv == false) {
          this.emailIcon= this.serverURL + res.data.attributes.EmailIcon.data.attributes.url;
        } else {
          this.emailIcon = res.data.attributes.EmailIcon.data.attributes.url;
        }
  
        this.instaIcon = res.data.attributes.InstagramIcon.data.attributes.url;
        this.behanceIcon = res.data.attributes.BehanceIcon.data.attributes.url;
        this.linkedinIcon = res.data.attributes.LinkedinIcon.data.attributes.url;
        this.logo = res.data.attributes.Logo.data.attributes.url;
      })
    }, 1500)

  }

//   hideAppRoot() {
//     console.log("Works")
//     this.homeNav = 'hide';
//     this.mainNav = 'show';
// }
}
