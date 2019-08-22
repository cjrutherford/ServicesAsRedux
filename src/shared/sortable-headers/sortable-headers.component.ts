import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sortable-headers',
  templateUrl: './sortable-headers.component.html',
  styleUrls: ['./sortable-headers.component.sass']
})
export class SortableHeadersComponent implements OnInit {
  @Input() keys: string[] = [];
  @Output() sortChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  changeSort(val: string){
    console.log(val);
    this.sortChange.emit(val);
  }

  ngOnInit() {
  }

}
