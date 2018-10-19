import { Component, OnInit } from '@angular/core';
import {FfTestPageService} from "@app/ff-test-page/ff-test-page.service";
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

@Component({
  selector: 'app-ff-test-page',
  templateUrl: './ff-test-page.component.html',
  styleUrls: ['./ff-test-page.component.scss']
})
export class FfTestPageComponent implements OnInit {

  public result: Object;
  public total: any;
  public title:any = '';
  constructor(private ffTest: FfTestPageService) { }

  ngOnInit() {
  }

  searchJokes(title:any) {
    this.ffTest.searchJoke(title)
      .subscribe(res => {
        this.result = res['result'];
        this.total = res['total'];
        console.log(this.result);
      })
  }
}
