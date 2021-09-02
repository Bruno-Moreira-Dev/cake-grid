import { Component, OnInit } from '@angular/core';
import { CatalogService } from './catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  cakes = [];

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.getCakes();
  }

  getCakes(): Promise<void> {
    return this.catalogService.getCakeList()
      .then(cake => {
        this.cakes = cake;
      })
      .catch(error => console.error(error));
  }

  removeCake(index): void {
    this.cakes.splice(index, 1);
  }
}
