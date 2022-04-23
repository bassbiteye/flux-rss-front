import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedServiceService {
   url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.lemonde.fr%2Frss%2Fen_continu.xml";
   url2 ="http://localhost:8080/api/feed"
  constructor(private http: HttpClient) {}
  getFeeds() {
    return this.http.get(this.url2);
  }
}
