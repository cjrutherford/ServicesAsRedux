import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBatchesComponent } from './admin-batches/admin-batches.component';

import {batchServiceProvider, ADMIN_BATCH_SERVICE_PROVIDER, ADMIN_STRING, ADMIN_BATCH} from '../providers/batchProvider';
import { SharedModule } from 'src/shared/shared.module';



@NgModule({
  declarations: [AdminBatchesComponent],
  imports: [
    CommonModule,SharedModule,
  ],
  exports: [AdminBatchesComponent],
  providers: [
    {provide: ADMIN_BATCH, useValue: ADMIN_STRING },
    {provide: ADMIN_BATCH_SERVICE_PROVIDER, useFactory: batchServiceProvider, deps: [ADMIN_BATCH]},
  ]
})
export class AdminBatchesModule { }
