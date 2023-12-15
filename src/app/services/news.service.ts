import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  _URL: string = environment._NEWS;

  constructor(private http: HttpClient) { }

  getNewsDefault(page: number) {
    return this.http.get(`${this._URL}/page=${page}`);
  }
}
