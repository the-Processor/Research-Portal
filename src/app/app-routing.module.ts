import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { QueriesComponent } from './queries/queries.component';
import { StudentsComponent } from './students/students.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'queries', component: QueriesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search-papers', component: SearchComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'web-admin', loadChildren: () => import('./web-admin/web-admin.module').then(m => m.WebAdminModule) },
  { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },
  // { path: 'students', component: StudentsComponent },
  { path: 'college-admin', loadChildren: () => import('./college-admin/college-admin.module').then(m => m.CollegeAdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRoutingModule{}
