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
  displayStyle = "none";

  ngOnInit(): void {
    this.feedServiceService.getFeeds().subscribe((data: any) =>{
      this.Lenght = data.lenght ;
      this.feeds = data ;
    })
  }
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
