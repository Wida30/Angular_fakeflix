import { entertainmentInterface } from './../../models/generalinterfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.scss'],
})
export class TopListComponent implements OnInit {
  public topList: entertainmentInterface;

  constructor() {
    this.topList = {
      title: 'Mas vistas',
      img: [
        {
          src: '../../../assets/images/Top10/1-papel.webp',
          alt: 'La casa de papel',
        },
        {
          src: '../../../assets/images/Top10/2-reina.webp',
          alt: 'La reina',
        },
        {
          src: '../../../assets/images/Top10/3-titanes.webp',
          alt: 'Titanes',
        },
        {
          src: '../../../assets/images/Top10/4-lostinspace.webp',
          alt: 'Lost in space',
        },
        {
          src: '../../../assets/images/Top10/5-dondecaben.webp',
          alt: 'Donde caben dos',
        },
      
      ],
    };
  }

  ngOnInit(): void {}
}
