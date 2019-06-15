// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Page imports
import { MissingPageComponent } from '@base-routes';
import { HomeComponent } from '@base-routes';

const overtableRoutes: Routes = [
  	{ path: '',   redirectTo: '/home', pathMatch: 'full' },
  	{ path: 'home', component: HomeComponent },
  	{ path: '**', component: MissingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(overtableRoutes)],
  exports: [RouterModule]
})
export class OverTableRoutingModule { }
