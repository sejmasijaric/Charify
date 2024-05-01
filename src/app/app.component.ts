import { Component } from '@angular/core';

import { ContentComponent } from './start-page/components/content.component';
import { MainPageContentComponent } from './main-page/components/header.main.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContentComponent, MainPageContentComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Charify';
}

