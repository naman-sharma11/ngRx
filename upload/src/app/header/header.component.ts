import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  name: string = 'header';

  nameState$: Observable<string>;

  constructor(private nameStore: Store<{ nameState: string }>) {
    this.nameState$ = nameStore.select('nameState');
  }

}
