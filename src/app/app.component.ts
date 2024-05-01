import { Component } from '@angular/core';

import { ContentComponent } from './start-page/components/content.component';
import { MainPageContentComponent } from './main-page/components/header.main.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContentComponent, MainPageContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Charify';
}

