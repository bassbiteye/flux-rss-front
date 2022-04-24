import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedServiceService {
   url ="http://localhost:8080/api/feed"
  constructor(private http: HttpClient) {}
  getFeeds() {
    return this.http.get(this.url);
  }
}
