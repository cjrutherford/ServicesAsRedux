import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchComponent } from './batch/batch.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SortableHeadersComponent } from './sortable-headers/sortable-headers.component';



@NgModule({
  declarations: [BatchComponent, InvoiceComponent, SortableHeadersComponent],
  imports: [
    CommonModule
  ],
  exports: [BatchComponent, InvoiceComponent, SortableHeadersComponent]
})
export class SharedModule { }
