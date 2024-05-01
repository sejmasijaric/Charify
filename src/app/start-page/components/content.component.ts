import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})


export class ContentComponent {
  constructor(private router: Router) { }

  navigateToMainPage() {
    window.location.href = 'http://localhost:4200/header.main.component'; 
  }

  navigateToMainComponent () {
    this.router.navigate(['/header.main.component']);
  }
}