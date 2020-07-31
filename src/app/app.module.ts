import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { QueriesComponent } from './queries/queries.component';
import { NewsComponent } from './news/news.component';
import { WebAdminComponent } from './web-admin/web-admin.component';
import { CollegeAdminComponent } from './college-admin/college-admin.component';
import { StudentsModule } from './students/students.module';
import { WebAdminModule } from './web-admin/web-admin.module';
import { CollegeAdminModule } from './college-admin/college-admin.module';
import { StudentsComponent } from './students/students.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SearchComponent,
    ContactComponent,
    HomeComponent,
    QueriesComponent,
    NewsComponent,
    CollegeAdminComponent,
    WebAdminComponent,
    StudentsComponent,
    UserSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StudentsModule,
    WebAdminModule,
    CollegeAdminModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
