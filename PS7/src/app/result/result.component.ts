import {Component, Input, OnInit} from '@angular/core';
import {RESULT} from '../models/resultModel';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() result: RESULT;

  constructor() { }

  ngOnInit() {
  }

}
