import { navigatorInterface } from './../../models/generalinterfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent implements OnInit {
  public modo: string = '🌙';

  public navigator!: navigatorInterface;

  constructor() {
    this.navigator = {
      img: {
        src: '../../assets/images/LOGO/logo.png',
        alt: 'fakeflix logo',
      },
      links: [
        {
          text: 'Inicio',
          link: '#home',
        },
        {
          text: 'Buscar',
          link: '#search',
        },
      ],
    };
  }

  ngOnInit(): void {}

  public cambioModo = () => {
    document.body.classList.toggle('noche');
    if (this.modo == '☀') {
      this.modo = '🌙';
    } else {
      this.modo = '☀';
    }
  };
}
