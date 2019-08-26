import { Injectable } from '@angular/core';

import MakeFake from './utils/makeFake';
import { BehaviorSubject } from 'rxjs';
import { IBatchService } from './app/providers/batchProvider';

@Injectable()
export class BatchService implements IBatchService {
  private readonly _batches: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  readonly batches$ = this._batches.asObservable();

  batchesSort: string = '';
  batchesAscending: boolean = false;
  batchesPageSize: number = 10;
  batchesPageNumber: number = 1;
  invoiceSort: string = '';
  invoiceAscending: boolean = false;
  invoicePageSize: number = 10;
  invoicePageNumber: number = 1;

  source: string;

  get batches(): any[] {
    return this._batches.getValue().map(this.sourcedBatchFormat);
  }

  set batches(val: any[]){
    this._batches.next(val)
  }

  addBatch(batch: any){
    this.batches = [
      ...this.batches, batch
    ];
  }

  changeInvoiceSort(sortVal: string){
    this.invoiceSort = sortVal;
    this.sortInvoices();
  }

  changeBatchSort(sortVal: string){
    this.batchesSort = sortVal;
    this.sortBatches();
  }

  sortBatches(){
    this.batches.sort((bA, bB) => bA[this.batchesSort] > bB[this.batchesSort] ? 1: -1);
  }

  sortInvoices(){
    this.batches.map(batch => batch.invoices.sort((iA, iB) => iA[this.invoiceSort] > iB[this.invoiceSort] ? 1: -1));
  }
  
  /**
   * Need to make sure this is able to reformat the format of the batches/invoices for 
   */

   batchformat = {
     admin: (batch) => {
       const {
         batchId, description, status, invoices
       } = batch;
       return {
         batchId, description, status, invoices
       };
     },
     customer: (batch) => {
       return batch;
     }
   }

  private sourcedBatchFormat = (batch) => {
    return this.batchformat[this.source](batch);
  }

  constructor(_source: string) {
    this._batches.next(MakeFake(20, 17));
    this.source = _source;
   }



}
