import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.sass']
})
export class InvoiceComponent implements OnInit {
  @Input() invoice: any;

  constructor() { }

  ngOnInit() {
  }

}
