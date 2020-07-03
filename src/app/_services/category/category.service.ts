import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './../../_models/Category';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
baseURL = 'http://localhost:5000/api/categories';

constructor( private http: HttpClient ) { }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.baseURL);
  }

  getCategory(id: Guid): Observable<Category>{
    return this.http.get<Category>(`${this.baseURL}/${id}`);
  }

  postCategory(category: Category){
    return this.http.post(this.baseURL, category);
  }

  putCategory(category: Category, id: Guid){
    return this.http.put(`${this.baseURL}/${id}`, category);
  }

  deleteCategory(id: Guid){
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
