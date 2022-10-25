import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Dog } from '../../dogs.types';
import * as fromDogsSelectors from '../../store/dogs.selectors'
import { DogsActions } from '../../store/dogs.actions'

@Component({
  selector: 'dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent implements OnInit {
  dogs: Observable<Dog[]>

  constructor(private _store: Store) { 
    this.dogs = this._store.select(fromDogsSelectors.getDogs)
  }

  ngOnInit(): void {
    this._store.dispatch(DogsActions.loadDogs())
  }

}
