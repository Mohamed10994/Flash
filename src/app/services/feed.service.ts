import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private httpService: HttpService) { }

  feedData(postData: any): Observable<any>{
    return this.httpService.post('feed', postData);
  }
}
