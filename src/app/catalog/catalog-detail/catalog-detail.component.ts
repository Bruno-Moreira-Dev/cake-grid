import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-catalog-detail',
  templateUrl: './catalog-detail.component.html',
  styleUrls: ['./catalog-detail.component.scss']
})
export class CatalogDetailComponent implements OnInit {
  cakes: object;
  id: number;
  rating: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private catalogService: CatalogService,
  ) { }

  ngOnInit() {
    this.getCakesById();
  }

  getCakesById(): Promise<void> {
    this.id = +this.route.snapshot.paramMap.get('id');

    return this.catalogService.getCakeList()
      .then(cake => {
        cake.forEach(item => {
          if (item.id === this.id) {
            this.rating = item.rate;
          }
        });

        this.cakes = cake;
      })
      .catch(error => console.error(error));
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  onGoBack(): void {
    this.router.navigate(['catalog']);
  }
}
