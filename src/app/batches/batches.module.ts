import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchesComponent } from './batches/batches.component';
import {batchServiceProvider, CUSTOMER_BATCH_SERVICE_PROVIDER, CUSTOMER_BATCH, CUSTOMER_STRING} from '../providers/batchProvider';

@NgModule({
  declarations: [BatchesComponent],
  imports: [
    CommonModule
  ],
  exports: [BatchesComponent],
  providers: [
    {provide: CUSTOMER_BATCH, useValue: CUSTOMER_STRING},
    {provide: CUSTOMER_BATCH_SERVICE_PROVIDER, useFactory: batchServiceProvider, deps: [CUSTOMER_BATCH]},
  ]
})
export class CustomerBatchesModule { }
