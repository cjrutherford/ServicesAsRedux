import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.sass']
})
export class BatchComponent implements OnInit {
  @Input() batch: any;
  fields: any;
  showInvoices: boolean = false;
  constructor() { }

  ngOnInit() {
    this.fields = Object.keys(this.batch);
  }

  isArray(item: any){
    return Array.isArray(item);
  }

  toggleInvoices(){
    this.showInvoices = !this.showInvoices;
  }

}
