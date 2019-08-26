import { NgModule, Injectable, APP_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBatchesComponent } from './admin-batches/admin-batches.component';

import {batchServiceProvider, ADMIN_BATCH_SERVICE_PROVIDER, ADMIN_STRING, ADMIN_BATCH, IBatchService} from '../providers/batchProvider';
import { SharedModule } from 'src/shared/shared.module';
import { from } from 'rxjs';
import { BatchService } from 'src/batch.service';


export class BatchBaseService implements IBatchService {
  getBatchesUrl = '';
  getBatches(customerId, userId, filter)  : any {
    
  }
}

@Injectable()
export class AdminBatchService extends BatchBaseService implements IBatchService {
  getBatches (customerId, userId, filter): any {
    
  }
}




@NgModule({
  declarations: [
    AdminBatchesComponent
  ],
  imports: [
    CommonModule,SharedModule,
  ],
  exports: [AdminBatchesComponent],
  providers: [
    {provide: BatchBaseService, useClass: AdminBatchService },
  ]
})
export class AdminBatchesModule { }


