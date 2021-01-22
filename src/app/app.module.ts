import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfilesaComponent } from './profilesa/profilesa.component';
import { HeaderComponent } from './header/header.component';
import { ShowCaseComponent } from './show-case/show-case.component';
import { CreateIdeasComponent } from './create-ideas/create-ideas.component';
import { LogoutComponent } from './logout/logout.component';
import { IdeaslistComponent } from './ideaslist/ideaslist.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { ProjectideasComponent } from './projectideas/projectideas.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfilesaComponent,
    HeaderComponent,
    ShowCaseComponent,
    CreateIdeasComponent,
    LogoutComponent,
    IdeaslistComponent,
    ReadmoreComponent,
    ProjectideasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass :'toast-bottom-right'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
