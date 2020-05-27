import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchListService } from './search-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Output() searchQuery: any = new EventEmitter()
  selectedDetails: any = [];
  dummyData: any = [];

  constructor( private http: HttpClient, private sQuery: SearchListService){
    this.http.get('assets/dummyData.json').subscribe((result) => {
      this.dummyData = result;
      console.log(this.dummyData)
    });
  }

  getSelectDetails(data) {
    this.selectedDetails = data;
  }

  getSearchData(data) {
    this.sQuery.query.next(data.target.value);
  }
}
