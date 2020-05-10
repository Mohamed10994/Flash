import { FeedUpdateComponent } from './feed-update/feed-update.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FeedCardComponent } from './feed-card/feed-card.component';
import {TimeAgoPipe} from 'time-ago-pipe';
import { TimeagoComponent } from './timeago/timeago.component';

@NgModule({
  declarations: [SlidesComponent, StartComponent,LogoComponent, FeedCardComponent,FeedUpdateComponent,TimeAgoPipe,TimeagoComponent],
exports:[SlidesComponent, StartComponent,LogoComponent, FeedCardComponent, FeedUpdateComponent,TimeAgoPipe,TimeagoComponent],
  imports: [
    CommonModule, FormsModule, IonicModule
  ]
})
export class ComponentsModule { }
