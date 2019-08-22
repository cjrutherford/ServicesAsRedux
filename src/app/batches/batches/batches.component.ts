import { Component, OnInit, Inject } from '@angular/core';
import { CUSTOMER_BATCH_SERVICE_PROVIDER } from 'src/app/providers/batchProvider';
import { BatchService } from 'src/batch.service';

@Component({
  selector: 'app-customer-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.sass']
})
export class BatchesComponent implements OnInit {

  batches: any[] = [];

  constructor(@Inject(CUSTOMER_BATCH_SERVICE_PROVIDER) private _batchesService: BatchService) { }

  ngOnInit() {
    this.batches = this._batchesService.batches;
    console.log(this.batches);
  }

}
