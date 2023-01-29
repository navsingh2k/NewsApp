import { Component, OnInit } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'OneTouch';
  public categories:Array<string> = ["business","entertainment","general","health","science","sports","technology"];
  public isMenuOpen: boolean = false;
  public selectedCategory:string = "Top Headlines";
  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
  reloadPage(){
    window.location.reload();
  }
  public articles:any = [];
  constructor(private newsApi : NewsService) { }

  ngOnInit(): void {
       this.newsApi.initArticles()
    .subscribe((res:any)=>{
      console.log(res);
      this.articles = res.articles;
    })
  }
  searchCategory(category:string){
    this.selectedCategory = category;
    this.newsApi.getArticlesByCategory(category)
    .subscribe((res:any)=>{
      console.log(res);
      this.articles = res.articles;
    })
    
  }
}
