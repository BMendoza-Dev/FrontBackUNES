import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import { BlogsService } from 'src/app/api/rest/blogs.service';
import { ScriptServiceService } from 'src/app/api/rest/script-service.service';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DatePipe } from '@angular/common';

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
  datos: any;
  fecha: any;

  constructor(private file: File,
    private fileOpener: FileOpener, private datePipe: DatePipe,
    private scriptService: ScriptServiceService, private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute, private serviceBlog: BlogsService, 
    public loadCont: LoadingController, private menuController:MenuController,
    private navCtrl:NavController) {
  }

  ngOnInit() {
    this.id_blog = this.activatedRoute.snapshot.paramMap.get("id");
    this.cargarBlog();
    this.cargarPdf();
    this.SumView();

  }

  ngOnDestroy() {
    this.scriptService.removeScript('twitter');
  }

  SumView(){
    this.serviceBlog.AddVisitaVisitanteBlog(this.id_blog).subscribe(data =>{console.log(data)})
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
      console.log(data)
      const date = new Date(data[0].created_at);
      this.fecha = this.datePipe.transform(date, 'dd/MM/yyyy');
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

  downloadPDF(name:string, pdf:any){
    const pdfBase64 = pdf;
    const pdfBlob = this.base64toBlob(pdfBase64, 'application/pdf');
    const fileName = name;
    const directory = this.file.externalRootDirectory + '/Download/';
    this.datos = `File: ${directory}`
    this.file.writeFile(directory, fileName, pdfBlob, { replace: true }).then((rest) => {
      console.log('PDF guardado en ' + directory + fileName);
      this.fileOpener.open(directory + fileName, 'application/pdf')
        .then((rest) => console.log('Archivo PDF abierto'))
        .catch(() => console.log('Error al abrir archivo PDF'));
    }).catch((error) => {
      console.log('Error al guardar PDF: ' + JSON.stringify(error));
    });
  }

  base64toBlob(base64: string, type: string){
    const binaryString = window.atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return new Blob([bytes], { type: type });
  }


  // dedescargarPDF(name:any,url:any){
  //   const base64Data = url // Aquí debes asignar el valor Base64 recibido desde la API

  //   const byteCharacters = atob(base64Data);
  //   const byteNumbers = new Array(byteCharacters.length);
  //   for (let i = 0; i < byteCharacters.length; i++) {
  //     byteNumbers[i] = byteCharacters.charCodeAt(i);
  //   }
  //   const byteArray = new Uint8Array(byteNumbers);

  //   const blob = new Blob([byteArray], { type: 'application/pdf' });

  //   const link = document.createElement('a');
  //   link.href = window.URL.createObjectURL(blob);
  //   link.download = 'tu_archivo.pdf'; // Nombre del archivo de descarga
  //   link.click();
  //   link.remove();
  // }

  abrirMenu() {
    this.menuController.open();
  }

  goBack(){
    this.navCtrl.back();
  }



}
