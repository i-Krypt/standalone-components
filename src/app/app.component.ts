import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeedbackAndChatComponent } from './feedback-and-chat/feedback-and-chat.component';
import { ImagesDataService } from './data-access/images-data.service';
import { ImagesInterface } from './interface/images';
import { ImageGridComponent } from './image-grid/image-grid.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, FeedbackAndChatComponent, ImageGridComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent {
  title = 'standalone-components';

  constructor() {}


}
