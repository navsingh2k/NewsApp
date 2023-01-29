import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
 api_key="e3e54763d6b8448ab4414e9f16fc7de4";
  constructor(private http : HttpClient) { }
 
  initArticles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + this.api_key);
  }

  getArticlesByCategory(category: String) {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=' + this.api_key + '&category=' + category);
  }
}
