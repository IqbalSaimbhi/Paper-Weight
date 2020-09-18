import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';

import { HttpModule } from '@angular/http';
import { HomeListComponent } from './home-list/home-list.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FrameworkComponent } from './framework/framework.component';
import {APP_BASE_HREF} from "@angular/common";
import {RouterModule} from "@angular/router";
import { CreateComponent } from './create/create.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import {FormsModule} from "@angular/forms";
import {Book} from './book'
import {BookDataService} from "./book-service.service";
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    HomeListComponent,
    AboutComponent,
    HomepageComponent,
    HeaderComponent,
    FrameworkComponent,
    CreateComponent,
    DetailsPageComponent,
    ContactusComponent,
   // BookDataService

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomepageComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
      path:'create',
        component:CreateComponent
      },
      {
        path:'book/:bookid',
        component:DetailsPageComponent
      },
      {
        path:'deleteBook/:bookid',
        component:BookDataService
      },
      {
        path:'contact',
        component:ContactusComponent
      }
    ])
  ],
  providers:[{provide:APP_BASE_HREF,useValue:'/'}],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
