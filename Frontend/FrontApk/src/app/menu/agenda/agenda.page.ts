import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { BlogsService } from 'src/app/api/rest/blogs.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  fechaNow: string;
  blogAgenda: any = [];
  limNext = 2;

  constructor(private service: BlogsService, private datePipe: DatePipe, private loadCont: LoadingController, private Nav: NavController) { }

  ngOnInit() {
    this.fechaActual();
    this.cargarAgenda();
  }

  fechaInic; agenda = []
  cargarAgenda() {
    this.showLoading();
    this.service.ListarBlogsAgenda().subscribe((data: any) => {
      console.log(data)
      this.blogAgenda = data.map(item => ({
        blogtitulo:item.blogtitulo,
        blogdescripcion:item.blogdescripcion,
        name: `${item.perfil.lastName} ${item.perfil.firstName}`,
        jurisdiction: `${item.perfil.jurisdiction}: ${item.perfil.territorialDivision}`,
        id:item.id
      }))

      // this.blogAgenda = data.map((item,index) => {
        
      //   if (index == 0) {
      //      this.fechaInic = this.transFormar(item.created_at);
      //   }
      //   // this.datePipe.transform(item.NotifyInfo.updated_at, 'dd/MM/yyyy'),
      //   console.log(this.fechaInic)
      //   if (this.fechaInic == this.transFormar(item.created_at)) {
      //     this.agenda.push(item);
      //   }
        
      // })
      this.loadCont.dismiss();
    })
  }

  transFormar(fecha:any) {
    return this.datePipe.transform(fecha,'dd/MM/yyyy');
  }

  fechaActual() {
    const now = new Date(); // Obtiene la fecha y hora actuales
    // Crea una matriz de nombres de mes

    const formattedDate = now.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }); // Formatea la fecha y hora actuales en el formato de fecha y hora local con el mes con el nombre correspondiente

    this.fechaNow = formattedDate // Muestra la fecha y hora actuales en formato "DD de mes de AAAA" en la consola

  }

  handleRefresh(event) {
    this.cargarAgenda();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  async showLoading() {
    const loading = await this.loadCont.create({
      message: 'Cargando...',
      cssClass: 'custom-loading',
      //spinner:'lines-sharp'
    });

    loading.present();
  }

  goBlog(id) {
    this.Nav.navigateForward(`inf-ultimas/${id}`);
  }


}
