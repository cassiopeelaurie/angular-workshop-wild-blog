import { Component, inject } from '@angular/core';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleThumbnailComponent, HttpClientModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent {

  apiService : ApiService = inject(ApiService);

  articles$!: Observable<Article[]>;

  ngOnInit() {
    this.articles$ = this.apiService.getArticles();
  }

  handleLike(article: Article) {
    article.isLiked = !article.isLiked;
  }
}
