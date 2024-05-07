import { Component } from '@angular/core';

import { ContentComponent } from './start-page/components/content.component';
import { MainPageContentComponent } from './start-page/components/header.main.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ChairPageContentComponent } from './start-page/components/content.chair.view';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContentComponent, MainPageContentComponent, RouterOutlet, RouterLink, RouterLinkActive, ChairPageContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Charify';
}

