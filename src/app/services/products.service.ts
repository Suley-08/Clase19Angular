import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURI: string ="https://api.escuelajs.co/api/v1/products"

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
    return this.http.get<Product[]>(this.apiURI)
  }

  getProductById(id: string){
    return this.http.get<Product>(`${this.apiURI}/${id}`)
  }
}
