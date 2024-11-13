import { Component } from '@angular/core';
import { ArticleListComponent } from "../../components/article-list/article-list.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticleListComponent, HttpClientModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
