import { FeedServiceService } from './../feed-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private feedServiceService: FeedServiceService){}
  Lenght : any ;
  page : number = 1 ;
  feeds : any ;
  title! : string ;
  description! : string ;
  ngOnInit(): void {
    this.feedServiceService.getFeeds().subscribe((data: any) =>{
      console.log("data", data) ;
      this.Lenght = data.lenght ;
      this.feeds = data ;
     // this.title = data.feed.title ;
     // this.description = data.feed.description ;
    })
  }
  changeTitle(post:any) {
    post.title = "title modifer";
  }

  changeContent(post:any) {
    post.content = "contenu modifer";
  }

  onSubmitForm() {
    console.log("titre modifier")
  }

}
