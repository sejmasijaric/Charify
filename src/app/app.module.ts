import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageContentComponent } from './start-page/components/header.main.component';

const routes: Routes = [
  { path: 'main-page', component: MainPageContentComponent },
  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }