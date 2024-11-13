import { Injectable } from '@angular/core';
import { Article } from './models/article.model';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

apiUrl = "assets/db.json";

  constructor(private httpClient: HttpClient) { }

  getArticles(): Observable<Article[]>  {
    return this.httpClient.get<{ articles: Article[] }>(this.apiUrl)
    .pipe(
      map((response) =>
        response.articles.filter((article) => article.isPublished)
      )
    );
  }

  getArticleById(id: number) {
    return this.httpClient.get<{ articles: Article[] }>(this.apiUrl).pipe(
      map((response) => response.articles.find((article) => article.id === id)!)
    );
  }
}
