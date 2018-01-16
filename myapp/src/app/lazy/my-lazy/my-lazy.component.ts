import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-my-lazy',
  templateUrl: './my-lazy.component.html',
  styleUrls: ['./my-lazy.component.scss']
})
export class MyLazyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const interval = Observable.interval(1000);

    // Returns: [0,1], [1,2], [2,3], [3,4], [4,5]
    interval
      .pairwise()
      .take(5)
      .subscribe(console.log);
  }
}
