import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buerostuhl',
  standalone: true,
  imports: [],
  templateUrl: './buerostuhl.view.html',
  styleUrl: './content.component.css'
})


export class BuerostuhlComponent {
  constructor(private router: Router) { }
}