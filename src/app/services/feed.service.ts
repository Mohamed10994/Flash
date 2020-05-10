import { HttpService } from './http.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  feedData$ = new BehaviorSubject<any>([]);

  constructor(private httpService: HttpService) { }

  changeFeedData(data: any){
    this.feedData$.next(data);
  }

  getCurrentFeedData(){
    return this.feedData$.getValue();
  }

  deleteFeedData(feedIndex: number){
    let data = [];
    let currentFeedData = this.getCurrentFeedData();

    currentFeedData.splice(feedIndex, 1);
    let newUpdatedFeed = data.concat(currentFeedData);
    this.changeFeedData(newUpdatedFeed);
  }

  updateFeedData(newFeed:any){
    let data = [];  
    let currentFeedData = this.getCurrentFeedData();
    data.push(newFeed);

    let newUpdatedFeed = data.concat(currentFeedData);
    this.changeFeedData(newUpdatedFeed);

  }

  feedData(postData: any): Observable<any>{
    return this.httpService.post('feed', postData);
  }
  feedDelete(postData: any): Observable<any>{
    return this.httpService.post('feedDelete', postData);
  }
  feedUpdate(postData: any): Observable<any>{
    return this.httpService.post('feedUpdate', postData);
  }
}
