import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { ProjectsComponent } from './projects/projects.component';
// import { ContactsComponent } from './contacts/contacts.component';
import { ProjectComponent } from './project/project.component';
// import { CasestudyTemplateComponent } from './casestudy-template/casestudy-template.component';
// import { RomashkaWebComponent } from './romashka-web/romashka-web.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { DesignProjsComponent } from './design-projs/design-projs.component';
import { GraphicProjsComponent } from './graphic-projs/graphic-projs.component';

const routes: Routes = [
  {path: 'progress', component: InProgressComponent},
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'case-studies', component: CaseStudiesComponent},
  {path: 'web-design', component: DesignProjsComponent},
  {path: 'projects', component: ProjectsComponent},
  // {path: 'contacts', component: ContactsComponent},
  {path: 'project', component: ProjectComponent},
  // {path: 'biogeek', component: CasestudyTemplateComponent},
  // {path: 'romashka', component: RomashkaWebComponent},
  {path: 'graphic-design', component: GraphicProjsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
