import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ AccountListComponent } from './account-list/account-list.component';
import{ AccountUpdateComponent} from './account-update/account-update.component';
import{ HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'Accountlist', component:AccountListComponent},
  {path:'AccountUpdate/:id',component:AccountUpdateComponent},
  {path:'',component:HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
