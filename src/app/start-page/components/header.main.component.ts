import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-main-page-header',
  standalone: true,
  imports: [],
  templateUrl: './header.main.component.html',
  styleUrl: './header.main.component.css'
})


export class MainPageContentComponent {
  constructor(private route: Router) { }
}
