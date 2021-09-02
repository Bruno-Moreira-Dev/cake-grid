import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogDetailComponent } from './catalog/catalog-detail/catalog-detail.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'catalog', component: CatalogComponent },
  { path: 'catalog/:id', component: CatalogDetailComponent },
  { path: "**", redirectTo: "/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
