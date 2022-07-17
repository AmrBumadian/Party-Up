import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FindpeersComponent } from './findpeers/findpeers.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './logout/logout.component';
import { PersonalityTestComponent } from './personality-test/personality-test.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FeedComponent } from './feed/feed.component'
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import {RequestInterceptor} from "./request.interceptor";
import { AddGameComponent } from './add-game/add-game.component';
import { OthersProfileComponent } from './others-profile/others-profile.component';
import { MyPeersComponent } from './my-peers/my-peers.component';
import { ReviewPeerComponent } from './review-peer/review-peer.component';
import { IfLoggedInGuard } from './if-logged-in.guard';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    FindpeersComponent,
    NotFound404Component,
    NavbarComponent,
    LogoutComponent,
    PersonalityTestComponent,
    FeedComponent,
    ProfileSettingsComponent,
    AddGameComponent,
    OthersProfileComponent,
    MyPeersComponent,
    ReviewPeerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [IfLoggedInGuard, {provide : HTTP_INTERCEPTORS , useClass : RequestInterceptor , multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
