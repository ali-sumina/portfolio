import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavPage } from './interfaces/nav-age.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
