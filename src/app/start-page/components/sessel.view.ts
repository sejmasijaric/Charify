import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sesselstuhl',
  standalone: true,
  imports: [],
  templateUrl: './sessel.view.html',
  styleUrl: './content.component.css'
})


export class SesselComponent {
  constructor(private router: Router) { }
}