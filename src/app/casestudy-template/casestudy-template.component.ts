import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CaseStudy } from '../interfaces/casestudy.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-casestudy-template',
  templateUrl: './casestudy-template.component.html',
  styleUrls: ['./casestudy-template.component.scss']
})
export class CasestudyTemplateComponent implements OnInit {

  serverURL = environment.server;

  title = '';
  overviewText = '';
  problemText = ''
  caseStudy:any = '';
  hypothesises:any[] = [];
  persona = '';
  cjm = '';
  sketches = ''
  wireframes:any[] = []
  homeCatalog = ''
  videoTests = ''

  constructor (private http: HttpClient) {}



  ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  this.http.get<CaseStudy>(this.serverURL + '/api/case-studies/1?populate=*').subscribe (res => {
    console.log (res)
    this.caseStudy = res.data.attributes
    this.hypothesises = res.data.attributes.hypothesisesText
    this.persona = this.serverURL +res.data.attributes.embedPersona.data.attributes.url
    this.cjm = this.serverURL + res.data.attributes.imgCJM.data.attributes.url
    this.sketches = this.serverURL + res.data.attributes.embedSketches.data.attributes.url
    this.wireframes = res.data.attributes.embedWireframes.data
    this.homeCatalog = this.serverURL + res.data.attributes.embedMockups.data[0].attributes.url
    this.videoTests = this.serverURL + res.data.attributes.embedMockups.data[1].attributes.url
  })
  }

}
