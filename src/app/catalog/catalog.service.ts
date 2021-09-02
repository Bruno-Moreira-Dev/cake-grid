import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  cakeList = './assets/cakes.json';

  constructor(private http: HttpClient) { }

  getCakeList(): Promise<any> {
    return this.http.get(`${this.cakeList}`).toPromise();
  }

  getCakeListById(id: number): Promise<any> {
    return this.http.get(`${this.cakeList}/${id}`).toPromise();
  }
}
