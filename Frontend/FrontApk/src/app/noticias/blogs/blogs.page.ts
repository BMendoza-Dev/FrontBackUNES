import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, MenuController } from '@ionic/angular';
import { UltimasPage } from '../ultimas/ultimas.page';
import { EditorialPage } from '../editorial/editorial.page';
import { MasLeidoPage } from '../mas-leido/mas-leido.page';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.page.html',
  styleUrls: ['./blogs.page.scss'],
})
export class BlogsPage implements OnInit {
  constructor(private menuController:MenuController) { }
  @ViewChild('mySlider') slides: IonSlides;

  segment = "segment1";
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    effect: 'fade'
  };
  

  componentUltimaNoticias = UltimasPage; componentEditorial=EditorialPage; componentMasLeido=MasLeidoPage;
  
  async slideChanged() {
    let currentIndex = await this.slides.getActiveIndex();
    if (currentIndex == 0) {
      this.segment = "segment1";
    } else if (currentIndex == 1) {
      this.segment = "segment2";
    } else if (currentIndex == 2) {
      this.segment = "segment3";
    }
  }

  segmentChanged() {
    if (this.segment == "segment1") {
      this.slides.slideTo(0);
    } else if (this.segment == "segment2") {
      this.slides.slideTo(1);
    } else if (this.segment == "segment3") {
      this.slides.slideTo(2);
    }
  }

  ngOnInit() {
  
  }

  abrirMenu() {
    this.menuController.open();
  }

}
