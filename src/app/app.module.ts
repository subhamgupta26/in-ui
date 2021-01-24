import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfilesaComponent } from './profilesa/profilesa.component';
import { HeaderComponent } from './header/header.component';
import { ShowCaseComponent } from './show-case/show-case.component';
import { CreateIdeasComponent } from './create-ideas/create-ideas.component';
import { LogoutComponent } from './logout/logout.component';
import { IdeaslistComponent, DialogOverviewExampleDialog } from './ideaslist/ideaslist.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { ProjectideasComponent } from './projectideas/projectideas.component';
import { ToastrModule } from 'ngx-toastr';
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

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
    ProjectideasComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' })
  ],
  entryComponents: [
    DialogOverviewExampleDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
