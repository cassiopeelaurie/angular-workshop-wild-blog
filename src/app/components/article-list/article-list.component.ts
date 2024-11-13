import { Component, inject } from '@angular/core';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleThumbnailComponent, HttpClientModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent {
  articles$!: Observable<Article[]>;
  http = inject(HttpClient);

  ngOnInit() {
    this.articles$ = this.http
      .get<{ articles: Article[] }>('assets/db.json')
      .pipe(
        map((response) =>
          response.articles.filter((article) => article.isPublished)
        )
      );
  }

  get hasPublishedArticles(): Observable<boolean> {
    return this.articles$.pipe(
      map(
        (articles: Article[]) =>
          articles && articles.some((article: Article) => article.isPublished)
      )
    );
  }

  handleLike(article: Article) {
    article.isLiked = !article.isLiked;
  }
}
