import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerBatchesModule} from './batches/batches.module';
import {AdminBatchesModule} from './admin-batches/admin-batches.module';
import { BatchesComponent } from './batches/batches/batches.component';
import { AdminBatchesComponent } from './admin-batches/admin-batches/admin-batches.component';


const routes: Routes = [
  {path: 'batches', component: BatchesComponent},
  {path: 'admin-batches', component: AdminBatchesComponent},
  {path: '', pathMatch: 'full', redirectTo: '/batches'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AdminBatchesModule, CustomerBatchesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
