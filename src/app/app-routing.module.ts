import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';
import { DeleteComponent } from './delete/delete.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"display",component:DisplayComponent},
  {path:"delete",component:DeleteComponent},
  {path:"home",component:HomeComponent},
  {path:"profile",component:ProfileComponent},
  {path:"upload",component:UploadComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
