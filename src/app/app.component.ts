import { Component, Output, EventEmitter, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import { SearchListService } from './search-list.service';
import { MainTableComponent } from './main-table/main-table.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @Output() searchQuery: any = new EventEmitter();
  selectedDetails: any = [];
  dummyData: any;
  defaultSelectedTab: boolean = true;
  @ViewChild(MainTableComponent) mainTable: MainTableComponent;

  constructor(
    private dataService: DataService,
    private sQuery: SearchListService
  ) {}


  ngAfterViewInit() {
    this.dataService.tableData.subscribe((x) => {
      if (x) {
        this.mainTable.data = this.dummyData;
        this.mainTable.getDetails(this.dummyData[0].id);
      }
    });
  }

  ngOnInit() {
    this.dataService.getData().subscribe((res) => {
      this.dummyData = res;
      this.dataService.tableData.next(true);
    });
  }

  getSelectDetails(data) {
    this.selectedDetails = data;
  }

  getSearchData(data) {
    this.sQuery.query.next(data.target.value);
  }
}
