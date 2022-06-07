import { entertainmentInterface } from './models/generalinterfaces';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public comedia: entertainmentInterface = {
  
    title: 'Comedia',
    img: [
      {
        src: '../../../assets/images/Comedia/cazafantasmas.webp',
        alt: 'Cazafantasmas',
      },
      {
        src: '../../../assets/images/Comedia/dictador.webp',
        alt: 'dictador',
      },
      {
        src: '../../../assets/images/Comedia/juerga.webp',
        alt: 'Juerga',
      },
      {
        src: '../../../assets/images/Comedia/laterminal.webp',
        alt: 'laterminal',
      },
      {
        src: '../../../assets/images/Comedia/ted2.webp',
        alt: 'ted2',
      }
    ]
  }

  public SciFi: entertainmentInterface = {
  
    title: 'Sci-Fi',
    img: [
      {
        src: '../../../assets/images/Sci-fi/12monos.webp',
        alt: '12 monos',
      },
      {
        src: '../../../assets/images/Sci-fi/jumper.webp',
        alt: 'jumper',
      },
      {
        src: '../../../assets/images/Sci-fi/deepimpact.webp',
        alt: 'Deep Impact',
      },
      {
        src: '../../../assets/images/Sci-fi/doom.webp',
        alt: 'Doom',
      },
      {
        src: '../../../assets/images/Sci-fi/startrek.webp',
        alt: 'Startrek',
      }
    ]
  }

  public Terror: entertainmentInterface = {
  
    title: 'Terror',
    img: [
      {
        src: '../../../assets/images/Terror/apostol.jpg',
        alt: 'apostol',
      },
      {
        src: '../../../assets/images/Terror/calleterror.jpg',
        alt: 'calle terror',
      },
      {
        src: '../../../assets/images/Terror/insidious2.webp',
        alt: 'insidioust',
      },
      {
        src: '../../../assets/images/Terror/multiple.webp',
        alt: 'multiple',
      },
      {
        src: '../../../assets/images/Terror/malasana.webp',
        alt: 'malasana',
      }
    ]
  }

}