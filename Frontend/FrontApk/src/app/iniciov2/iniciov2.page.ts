import { Component, OnInit } from '@angular/core';
import { ScriptServiceService } from '../api/rest/script-service.service';
import { LoadingController, MenuController } from '@ionic/angular';


@Component({
  selector: 'app-iniciov2',
  templateUrl: './iniciov2.page.html',
  styleUrls: ['./iniciov2.page.scss'],
})
export class Iniciov2Page implements OnInit {

  constructor(private scriptService: ScriptServiceService,
    public loadCont: LoadingController, private menuController: MenuController) {
    // this.scriptService.loadScript({ id: 'twitter', url: 'https://platform.twitter.com/widgets.js' })
    //   .then(data => { 
    //     console.log('script loaded ', data);
    //   }).catch(error => console.log(error));

    this.scriptService.loadTwitterScript()
    .then(() => {
      console.log('El script de Twitter se cargó correctamente.');
      // Puedes realizar acciones adicionales después de que el script se haya cargado
    })
    .catch((error) => {
      console.error('Error al cargar el script de Twitter:', error);
    });
  }

  ngOnInit() {
  }

  abrirMenu() {
    this.menuController.open();
  }

}
