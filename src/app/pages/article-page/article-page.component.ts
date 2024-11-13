import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../../models/article.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [ HttpClientModule, CommonModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {

private route: ActivatedRoute = inject(ActivatedRoute);

articleId!: number;

articles$!: Observable<Article>;
http = inject(HttpClient);

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
      if (this.articleId) {
        this.getArticleById(this.articleId);
      }
    });
  }

  getArticleById(id: number) {
    this.articles$ = this.http.get<Article>(`http://localhost:3000/articles/${id}`);
}}
