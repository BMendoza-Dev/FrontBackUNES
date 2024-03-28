import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import { PerfilAsamService } from 'src/app/api/rest/perfil-asam.service';
@Component({
  selector: 'app-votos-asambleista',
  templateUrl: './votos-asambleista.page.html',
  styleUrls: ['./votos-asambleista.page.scss'],
})
export class VotosAsambleistaPage implements OnInit {
  id_perfil: any;
  votos: any = [];
  textoBuscar: any;
  votosFilter: any = [];
  lim = 10;
  constructor(private activatedRoute: ActivatedRoute, private service: PerfilAsamService, 
    public loadCont: LoadingController, private menuController:MenuController,
    private navCtrl:NavController) { }

  ngOnInit() {
    this.id_perfil = this.activatedRoute.snapshot.paramMap.get("id");
    this.obtenerVotaciones();
  }

  obtenerVotaciones() {
    this.showLoading();
    this.service.getVotacionPorAsambleistaApp(this.id_perfil).subscribe((data: any) => {
      this.votos = data.map(item => {
        let dato = item.initialDate.split(" ");
        return dato = {
          'initialDate': dato[0],
          'description': item.description,
          'sesion': item.sesion,
          'voto': item.voto
        }
      })
      this.votosFilter = this.votos
      this.loadCont.dismiss();
    })
  }

  async showLoading() {
    const loading = await this.loadCont.create({
      message: 'Cargando...',
      cssClass: 'custom-loading',
      //spinner:'lines-sharp'
    });

    loading.present();
  }

  buscar(event) {
    this.textoBuscar = event.detail.value;
    this.votosFilter = this.transform(this.votos, this.textoBuscar);
  }

  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [{ 'description': false }];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    const filteredItems = items.filter((item: any) => {
      return Object.values(item).some((val: any) => {
        if (val === null) {
          return false;
        }
        return val.toString().toLowerCase().includes(searchText);
      });
    });

    if (filteredItems.length === 0) {
      return [{ 'description': false }];
    }
    return filteredItems;
  }

  onIonInfinite(event) {
    setTimeout(() => {
      this.lim += 10;
      event.target.complete();
    }, 600);
  }

  abrirMenu(){
    this.menuController.open();
  }

  goBack() {
    this.navCtrl.back();
  }

}
