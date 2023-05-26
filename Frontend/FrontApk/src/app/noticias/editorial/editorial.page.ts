import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingController, NavController } from '@ionic/angular';
import { BlogsService } from 'src/app/api/rest/blogs.service';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.page.html',
  styleUrls: ['./editorial.page.scss'],
})
export class EditorialPage implements OnInit {
  editorialList: any = [];
  lim = 2;

  constructor(private serviceBlog: BlogsService,public loadCont: LoadingController,
     private sanitizer: DomSanitizer, private Nav: NavController) { }

  ngOnInit() {
    this.ListarEditorialApp();
  }

  ListarEditorialApp() {
    // this.showLoading();
    this.serviceBlog.ListarEditorialApp().subscribe((data: any) => {
      console.log(data)
      this.editorialList = data.map((item: any) => {
        let blogs: any = [];
        blogs = item['blogs'].slice(0,2).map((itemBlob: any) => {
          let objectURL = 'data:image/jpeg;base64,' + itemBlob.imagen;
          let thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
          let lisBlog: any = [];
          return lisBlog = {
            blogtitulo: itemBlob.blogtitulo,
            blogdescripcion: itemBlob.blogdescripcion,
            categorianame: itemBlob.categorianame,
            imagen:thumbnail,
            name: `${itemBlob.perfil.lastName} ${itemBlob.perfil.firstName}`,
            jurisdiction: `${itemBlob.perfil.jurisdiction}: ${itemBlob.perfil.territorialDivision}`,
          }
        })
        return data = {
          editorialname: item.editorialname,
          id: item.id,
          blogs: blogs
        }
      });
      // this.loadCont.dismiss();
    })
  }

  handleRefresh(event) {
    this.ListarEditorialApp();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  };


  onIonInfinite(event) {
    
    setTimeout(() => {
      this.lim += 2;
      event.target.complete();
    }, 600);
  }

  goInfEdit(id: any) {
    this.Nav.navigateForward(`inf-editorial/${id}`);
  }

  async showLoading() {
    const loading = await this.loadCont.create({
      message: 'Cargando...',
      cssClass: 'custom-loading',
      //spinner:'lines-sharp'
    });

    loading.present();
  }

}
