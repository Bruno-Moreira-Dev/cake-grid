import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CatalogComponent } from './catalog.component';
import { MatCardModule, MatButtonModule, MatGridListModule, MatIconModule } from '@angular/material';
import { CatalogDetailComponent } from './catalog-detail/catalog-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CatalogComponent,
    CatalogDetailComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
  ],
  exports: [
    CatalogComponent,
    CatalogDetailComponent,
  ]
})
export class CatalogModule { }
