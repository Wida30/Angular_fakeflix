import { toptInterfaceDos } from './../../models/generalinterfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.scss'],
})
export class TopListComponent implements OnInit {
  public topList: toptInterfaceDos;

  constructor() {
    this.topList = {
      title: 'Mas vistas',
      img: [
        {
          number:1,
          src: '../../../assets/images/Top10/1-papel.webp',
          alt: 'La casa de papel',
        },
        {
          number:2,
          src: '../../../assets/images/Top10/2-reina.webp',
          alt: 'La reina',
        },
        {
          number:3,
          src: '../../../assets/images/Top10/3-titanes.webp',
          alt: 'Titanes',
        },
        {
          number:4,
          src: '../../../assets/images/Top10/4-lostinspace.webp',
          alt: 'Lost in space',
        },
        {
          number:5,
          src: '../../../assets/images/Top10/5-dondecaben.webp',
          alt: 'Donde caben dos',
        },
      
      ],
    };
  }

  ngOnInit(): void {}
}
