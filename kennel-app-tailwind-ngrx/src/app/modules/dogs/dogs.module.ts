import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsListComponent } from './views/dogs-list/dogs-list.component';
import { DogsEditComponent } from './views/dogs-edit/dogs-edit.component';
import { DogsAddComponent } from './views/dogs-add/dogs-add.component';
import { DogsDeleteComponent } from './views/dogs-delete/dogs-delete.component';
import { DogsRoutingModule } from './dogs.routing';
import { StoreModule } from '@ngrx/store';
import { dogReducer, DogState, DOG_FEATURE_KEY } from './store/dogs.reducers';
import { DogsService } from './dogs.service';
import { EffectsModule } from '@ngrx/effects';
import { DogsEffects } from './store/dogs.effects';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DogsListComponent,
    DogsEditComponent,
    DogsAddComponent,
    DogsDeleteComponent
  ],
  imports: [
    SharedModule,
    DogsRoutingModule,
    StoreModule.forFeature<DogState>(DOG_FEATURE_KEY, dogReducer),
    EffectsModule.forFeature([DogsEffects])
  ],
  providers: [
    DogsService
  ]
})
export class DogsModule { }
