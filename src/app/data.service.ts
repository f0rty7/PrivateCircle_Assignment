import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  tableData: BehaviorSubject<any> = new BehaviorSubject(false);


  constructor(private http: HttpClient) { }

  getData() {
    const data = this.http.get('assets/dummyData.json');
    return data;
  }
}
