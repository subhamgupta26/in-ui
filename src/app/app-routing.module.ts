import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfilesaComponent } from './profilesa/profilesa.component';
// import { HeaderComponent } from './header/header.component';
import { ShowCaseComponent } from './show-case/show-case.component';
import { CreateIdeasComponent } from './create-ideas/create-ideas.component';
import { AuthguardService } from './service/authguard.service';
import { LogoutComponent } from './logout/logout.component';
import { IdeaslistComponent } from './ideaslist/ideaslist.component';
import { ProjectideasComponent } from './projectideas/projectideas.component';

const routes: Routes = [
  { path: '',component:IdeaslistComponent,canActivate:[AuthguardService] },
  {path:'showcase',component:ShowCaseComponent,canActivate:[AuthguardService]},
  {path:'profile',component:ProfilesaComponent,canActivate:[AuthguardService]},
  {path:'createIdeas',component:CreateIdeasComponent,canActivate:[AuthguardService]},
  { path: 'login', component: LoginComponent },
  {path:'idealist',component:IdeaslistComponent,canActivate:[AuthguardService]},
  { path: 'logout', component: LogoutComponent,canActivate:[AuthguardService] },
  { path: 'projectIdes', component: ProjectideasComponent,canActivate:[AuthguardService] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
