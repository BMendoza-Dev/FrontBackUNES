import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { BlogsService } from 'src/app/api/rest/blogs.service';
import { ScriptServiceService } from 'src/app/api/rest/script-service.service';
// import { Share, ShareOptions } from '@capacitor/share';
@Component({
  selector: 'app-inf-ultimas',
  templateUrl: './inf-ultimas.page.html',
  styleUrls: ['./inf-ultimas.page.scss'],
})
export class InfUltimasPage implements OnInit, OnDestroy {
  id_blog: any;
  blogtitulo: any;
  blogdescripcion: any;
  categorianame: any;
  blogcontenido: SafeHtml;
  imagen: any;
  listPdf: any = [];

  constructor(private scriptService: ScriptServiceService, private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute, private serviceBlog: BlogsService, public loadCont: LoadingController) {
  }

  ngOnInit() {
    this.id_blog = this.activatedRoute.snapshot.paramMap.get("id");
    this.cargarBlog();
    this.cargarPdf();

  }

  ngOnDestroy() {
    this.scriptService.removeScript('twitter');
  }

  cargarPdf() {
    this.serviceBlog.ListarPdfBlogApp(this.id_blog).subscribe((data) => {
      console.log(data)
      this.listPdf = data;
    })
  }

  cargarBlog() {
    this.showLoading();
    this.serviceBlog.ObtenerBlogApp(this.id_blog).subscribe((data: any) => {

      this.blogtitulo = data[0].blogtitulo;
      this.blogdescripcion = data[0].blogdescripcion;
      this.categorianame = data[0].categorianame;
      this.blogcontenido = data[0].blogcontenido;
      let objectURL = 'data:image/jpeg;base64,' + data[0].imagen;
      let thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      this.imagen = thumbnail;
      this.scriptService.loadScript({ id: 'twitter', url: 'https://platform.twitter.com/widgets.js' })
        .then(data => {
          console.log('script loaded ', data);
        }).catch(error =>
          console.log(error));
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

  // async share() {
  //   const shareOptions: ShareOptions = {
  //     title: 'Mi título',
  //     text: 'Mi texto',
  //     url: 'http://localhost:8100/inf-ultimas',
  //     dialogTitle: 'Compartir con...'
  //   };

  //   try {
  //     const result = await Share.share(shareOptions);
  //     console.log('Compartido con éxito', result);
  //   } catch (error) {
  //     console.error('Error al compartir', error);
  //   }
  // }

}
