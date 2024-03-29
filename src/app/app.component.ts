import { Component,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ProfolioComponent } from './componets/profolio/profolio.component';

interface Item {
  title: string,
  link:string,
  description:string,
};
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet,ProfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  titlee = 'alchemysoul';
 

}
