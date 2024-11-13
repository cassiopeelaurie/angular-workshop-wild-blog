import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../../models/article.model';
import { RouterLink } from '@angular/router';
import { CommonModule, DatePipe, NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-article-thumbnail',
  standalone: true,
  imports: [RouterLink, CommonModule, NgClass, DatePipe, HttpClientModule],
  templateUrl: './article-thumbnail.component.html',
  styleUrls: ['./article-thumbnail.component.scss']
})
export class ArticleThumbnailComponent {
  @Input() article!: Article;
  @Output() notifyLike : EventEmitter<Article> = new EventEmitter<any>();

  sendNotification() {
    this.notifyLike.emit(this.article);
  }
}
