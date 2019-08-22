import { Component, OnInit, Inject } from '@angular/core';
import { BatchService } from 'src/batch.service';
import {ADMIN_BATCH_SERVICE_PROVIDER} from '../../providers/batchProvider';

@Component({
  selector: 'app-admin-batches',
  templateUrl: './admin-batches.component.html',
  styleUrls: ['./admin-batches.component.sass']
})
export class AdminBatchesComponent implements OnInit {
  batches: any[] = [];
  keys: string[] = [];

  constructor(@Inject(ADMIN_BATCH_SERVICE_PROVIDER) private _batchesService: BatchService) { }

  ngOnInit() {
    this.batches = this._batchesService.batches;
    // console.log(this.batches);
    this.keys = Object.keys(this.batches[0]);
    // this.keys = this.keys.slice(this.keys.indexOf('invoices'), 1);
  }

  changeSort(val: string){
    console.log(val);
    this._batchesService.changeBatchSort(val);
  }

}
