import { NgModule } from '@angular/core';
import { AlbumsComponent } from './albums/albums.component';
import { LoginComponent } from './login/login.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GuardService } from './guard.service';

// vous routes définies
const albumsRoutes: Routes = [
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: '',
    redirectTo: '/albums',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'album/:ref',
    component: AlbumDescriptionComponent
  },
  {
    path: 'dashboard', canActivate: [GuardService],
    component: DashboardComponent
  },
  { path: '**', component: PageNotFoundComponent } // page not found
]; // définition des routes

@NgModule({
  imports: [
    RouterModule.forRoot(albumsRoutes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }