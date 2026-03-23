import { Component } from '@angular/core';
import { SuggestedVideos } from '../suggested-videos/suggested-videos';
import { VideoPlayer } from '../video-player/video-player';
import { Comments } from '../comments/comments';

@Component({
  selector: 'app-videopage',
  standalone:true,
  imports: [Comments,SuggestedVideos,VideoPlayer],
  templateUrl: './videopage.html',
  styleUrl: './videopage.css',
})
export class Videopage {
  
}
