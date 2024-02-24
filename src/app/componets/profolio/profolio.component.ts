import { Component,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
interface Item {
  id:number;
  title: string,
  link:string,
  description:string,
};
@Component({
  selector: 'app-profolio',
  standalone: true,
  imports: [],
  template: `
  <ul>
   <li>hola</li>
  </ul>
  `,
  styleUrl: './profolio.component.css'
})
export class ProfolioComponent {
 
}
