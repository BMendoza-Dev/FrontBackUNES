import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mas-leido',
  templateUrl: './mas-leido.page.html',
  styleUrls: ['./mas-leido.page.scss'],
})
export class MasLeidoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };

}
