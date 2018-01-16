import { Component, OnInit } from '@angular/core';

// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

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
