import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { ScriptServiceService } from '../api/rest/script-service.service';

@Component({
  selector: 'app-opc-inicv2',
  templateUrl: './opc-inicv2.page.html',
  styleUrls: ['./opc-inicv2.page.scss'],
})
export class OpcInicv2Page implements OnInit {

  constructor(private scriptService: ScriptServiceService,
    public loadCont: LoadingController, private menuController: MenuController) {
    this.scriptService.loadScript({ id: 'twitter', url: 'https://platform.twitter.com/widgets.js' })
      .then(data => {
        console.log('script loaded ', data);
      }).catch(error => console.log(error));
  }


  ngOnInit( ) {
  }

  abrirMenu() {
    this.menuController.open();
  }

}
