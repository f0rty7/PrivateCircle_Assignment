import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchListService {
  query: Subject<string> = new Subject();

  constructor() {}
}
