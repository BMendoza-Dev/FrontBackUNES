import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as scriptjs from 'scriptjs';
import { IonContent, IonSlides, LoadingController, NavController } from '@ionic/angular';
import { InfUltimasPage } from '../inf-ultimas/inf-ultimas.page';
import { Time, formatDate } from '@angular/common';
import { BlogsService } from 'src/app/api/rest/blogs.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-ultimas',
  templateUrl: './ultimas.page.html',
  styleUrls: ['./ultimas.page.scss'],
})
export class UltimasPage implements OnInit, OnDestroy {

  datetime: string;
  blogUlti: any = [];
  lim = 5;
  limNext = this.lim;
  limPrev = 0;
  search = "";
  fecha: any;
  blogUltiFilter: any = [];
  @ViewChild('content', { static: true }) content: IonContent;
  constructor(private serviceBlog: BlogsService,  private Nav: NavController,
    private sanitizer: DomSanitizer, public loadCont: LoadingController) {
    // Inicializar datetime con la fecha actual
    this.datetime = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  }
  ngOnInit(): void {
    this.cargarBlog()
  }

  ngOnDestroy(): void {
    this.loadCont.dismiss();
  }

  handleRefresh(event) {
      this.cargarBlog();
      setTimeout(() => {
        event.target.complete();
    }, 2000);
  };

  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    return utcDay !== 0 && utcDay !== 6;
  };

  cargarBlog() {
    this.showLoading();
    this.serviceBlog.ListarBlogUltimaNoticiaApp().subscribe((data: any) => {
      console.log(data)
      if(!data.error){
        this.blogUlti = data.map((item: any) => {
          let objectURL = 'data:image/jpeg;base64,' + item.imagen;
          let thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
          let time = this.formatTime(item.created_at)
          return data = {
            name: `${item.perfil.lastName} ${item.perfil.firstName}`,
            jurisdiction: `${item.perfil.jurisdiction}: ${item.perfil.territorialDivision}`,
            blogtitulo: item.blogtitulo,
            blogdescripcion: item.blogdescripcion,
            imagen: thumbnail,
            id: item.id,
            created_at: time
          }
        }
        )
        this.blogUltiFilter = this.blogUlti;
      }
    
      this.loadCont.dismiss();
    }), error => {
      console.log(error)
    }
  }


  cambiarBlogNext() {
    this.showLoading();
    
    setTimeout(() => {
      this.limPrev = this.limNext
      this.limNext = this.limNext + this.lim
      this.loadCont.dismiss();
      this.scrollToTop();
    }, 2000)

  }

  cambiarBlogPrev() {
    this.showLoading();
    
    setTimeout(() => {
      this.limPrev = this.limPrev - this.lim
      this.limNext = this.limPrev + this.lim
      this.loadCont.dismiss();
      this.scrollToTop();
    }, 2000)

  }

  buscarBlog() {
    this.showLoading()
    setTimeout(() =>{
      this.limNext = this.lim;
    this.limPrev = 0;
    this.blogUltiFilter = this.blogUlti;
    this.blogUltiFilter = this.transform(this.blogUltiFilter, this.fecha);
    if (this.search != '') {
      this.blogUltiFilter = this.transform(this.blogUltiFilter, this.search);
    }
    this.loadCont.dismiss();
    this.scrollToTop();
    },2000)
    
    console.log(this.blogUltiFilter);
  }

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [{ 'blogtitulo': false }];
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
      return [{ 'blogtitulo': false }];
    }
    return filteredItems;
  }

  onDateChange(event) {
    let time = event.detail.value;
    this.fecha = this.formatTime(time);
  }

  formatTime(time: any) {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${year}-${month}`;
    return formattedDate;
  }

  async showLoading() {
    const loading = await this.loadCont.create({
      message: 'Cargando...',
      cssClass: 'custom-loading',
      //spinner:'lines-sharp'
    });

    loading.present();
  }

  goInfBlog(id: any) {
    this.Nav.navigateForward(`inf-ultimas/${id}`);
  }

  scrollToTop() {
    const divElement = document.getElementById('miDiv');
  this.content.scrollToPoint(0, divElement.offsetTop, 500); // El número 400 representa la duración de la animación en milisegundos
  }

}
