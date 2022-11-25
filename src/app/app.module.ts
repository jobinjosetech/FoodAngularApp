import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BurgerComponent } from './burger/burger.component';
import { JuicesComponent } from './juices/juices.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

const myRoutes:Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"home",
    component:HomePageComponent
  },
  {
    path:"burger",
    component:BurgerComponent
  },
  {
    path:"juice",
    component:JuicesComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BurgerComponent,
    JuicesComponent,
    SignupComponent,
    LoginComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
