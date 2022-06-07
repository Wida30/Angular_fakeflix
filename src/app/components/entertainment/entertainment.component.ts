import { entertainmentInterface } from './../../models/generalinterfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss'],
})
export class EntertainmentComponent implements OnInit {
 @Input() public entertainment!: entertainmentInterface;

  constructor() {
    
  }

  ngOnInit(): void {}
}
