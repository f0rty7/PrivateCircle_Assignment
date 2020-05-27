import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchListService } from '../search-list.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent implements OnInit {
  dummyData: any = [];

  @Output() selectedDetails: any = new EventEmitter();
  @Input() tableData: any;
  searchData: any;
  query: string;

  constructor(private http: HttpClient, private sQuery: SearchListService) { }

  ngOnInit() {
    this.sQuery.query.subscribe(q => this.query = q);
  }

  getDetails(id) {
    const a = this.tableData;
    const b = a.filter(x => x.id === id);
    this.selectedDetails.emit(b);
  }

}
