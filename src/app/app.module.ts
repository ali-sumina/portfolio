import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { NavPageComponent } from './nav-page/nav-page.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { CasestudyTemplateComponent } from './casestudy-template/casestudy-template.component';
import { RomashkaWebComponent } from './romashka-web/romashka-web.component';
import { InProgressComponent } from './in-progress/in-progress.component';
// import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ProjectComponent,
    NavPageComponent,
    CaseStudiesComponent,
    ProjectsComponent,
    ContactsComponent,
    CasestudyTemplateComponent,
    RomashkaWebComponent,
    InProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
