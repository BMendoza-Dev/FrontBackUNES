import { Component, OnInit, ViewChild } from '@angular/core';
import * as scriptjs from 'scriptjs';
import { IonSlides } from '@ionic/angular';
import { InfUltimasPage } from '../inf-ultimas/inf-ultimas.page';
import { formatDate } from '@angular/common';
import { BlogsService } from 'src/app/api/rest/blogs.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-ultimas',
  templateUrl: './ultimas.page.html',
  styleUrls: ['./ultimas.page.scss'],
})
export class UltimasPage implements OnInit {

  datetime: string;
  blogUlti: any;

  constructor(private serviceBlog: BlogsService,private sanitizer: DomSanitizer) {
    // Inicializar datetime con la fecha actual
    this.datetime = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  }
  ngOnInit(): void {
    this.cargarBlog()
  }

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };

  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    /**
     * Date will be enabled if it is not
     * Sunday or Saturday
     */
    return utcDay !== 0 && utcDay !== 6;
  };

  cargarBlog() {
    this.serviceBlog.ListarBlogUltimaNoticiaApp().subscribe((data: any) => {
      console.log(data)
      this.blogUlti = data.map((item: any) => {
        let objectURL = 'data:image/jpeg;base64,' + item.imagen;
        let thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        return data = {
          name: `${item.perfil.lastName} ${item.perfil.firstName}`,
          jurisdiction : `${item.perfil.jurisdiction}: ${item.perfil.territorialDivision}`,
          blogtitulo:item.blogtitulo,
          blogdescripcion:item.blogdescripcion,
          imagen: thumbnail,
          id:item.id
        }
      }
      )
      console.log(this.blogUlti)
    }), error => {
      console.log(error)
    }
  }

}
