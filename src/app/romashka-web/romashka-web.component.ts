import { Component, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebCase } from '../interfaces/webcase.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-romashka-web',
  templateUrl: './romashka-web.component.html',
  styleUrls: ['./romashka-web.component.scss']
})



export class RomashkaWebComponent implements OnInit {

  constructor (private http:HttpClient){}
  sketches:any[] = []
  overviewText = ''
  challengesText = ''
  keyResText = ''
  timelinesText = ''

  serverURL = environment.server;

  ngOnInit(): void {
    
    this.http.get<WebCase>(this.serverURL + '/api/web-cases/1?populate=*').subscribe(res => {
      console.log(res)
      this.sketches = res.data.attributes.Sketches.data

      this.overviewText = res.data.attributes.overviewText
      this.challengesText = res.data.attributes.challengesText
      this.keyResText = res.data.attributes.keyResText
      this.timelinesText = res.data.attributes.timelineText

    })

  }
  

}
