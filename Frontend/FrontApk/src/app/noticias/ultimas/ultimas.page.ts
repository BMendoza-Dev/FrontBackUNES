import { Component, OnInit, ViewChild } from '@angular/core';
import * as scriptjs from 'scriptjs';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-ultimas',
  templateUrl: './ultimas.page.html',
  styleUrls: ['./ultimas.page.scss'],
})
export class UltimasPage implements OnInit {

  constructor() { }
  @ViewChild('mySlider') slides: IonSlides;

  segment = "segment1";
  
  
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
    
    //scriptjs('https://platform.twitter.com/widgets.js', (dato:any) => {
      // Aquí puedes ejecutar cualquier código que dependa del script cargado
      //dato; 
    //});
  }

}
