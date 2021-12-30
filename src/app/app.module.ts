import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {CourseModule} from "./courses/course.module";
import {CoreModule} from "./core/component/nav-bar/core.module";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CourseModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',redirectTo:'courses',pathMatch:'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
