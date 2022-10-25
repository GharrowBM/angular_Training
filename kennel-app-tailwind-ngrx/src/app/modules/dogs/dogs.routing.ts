import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DogsAddComponent } from "./views/dogs-add/dogs-add.component";
import { DogsDeleteComponent } from "./views/dogs-delete/dogs-delete.component";
import { DogsEditComponent } from "./views/dogs-edit/dogs-edit.component";
import { DogsListComponent } from "./views/dogs-list/dogs-list.component";

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'list'},

    {path: 'list', component: DogsListComponent},
    {path: 'add', component: DogsAddComponent},
    {path: 'edit/:id', component: DogsEditComponent},
    {path: 'delete/:id', component: DogsDeleteComponent}

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DogsRoutingModule {}