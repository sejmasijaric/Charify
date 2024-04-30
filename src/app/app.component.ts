import { Component } from '@angular/core';
import { ContentComponent } from './start-page/components/content.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Charify';
}
