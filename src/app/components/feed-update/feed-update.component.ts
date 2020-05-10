import { FeedService } from './../../services/feed.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feed-update',
  templateUrl: './feed-update.component.html',
  styleUrls: ['./feed-update.component.scss'],
})
export class FeedUpdateComponent implements OnInit {
  @Input() loginUser : any;
  public postData = {
    user_id: '',
    token: '',
    feed: ''
  }
  constructor(private feedService: FeedService) { }

  ngOnInit() {}

  feedUpdateAction(){
    this.postData.user_id = this.loginUser.user_id;
    this.postData.token = this.loginUser.token;
    this.feedService.feedUpdate(this.postData).subscribe((res: any)=>{
      this.postData.feed = '';
      this.feedService.updateFeedData(res.feedData);
      
    })
    
  }
}
