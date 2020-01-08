import { NgModule } from'@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvilListComponent } from './evil-list/evil-list.component';
import { EvilEditComponent } from './evil-edit/evil-edit.component';

const routes: Routes = [  
  {    
    path: '',    
    component: EvilListComponent
  },

  {  path: 'edit/:id',  
     component: EvilEditComponent
  }
];
  

  @NgModule({  
    imports: [RouterModule.forRoot(routes)],  
    exports: [RouterModule]
  })
    
  export class AppRoutingModule { }