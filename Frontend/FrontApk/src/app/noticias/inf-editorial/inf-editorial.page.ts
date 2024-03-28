import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import { BlogsService } from 'src/app/api/rest/blogs.service';

@Component({
  selector: 'app-inf-editorial',
  templateUrl: './inf-editorial.page.html',
  styleUrls: ['./inf-editorial.page.scss'],
})
export class InfEditorialPage implements OnInit {
  id_editorial: any;
  titleEdit: any;
  blogEditorial: any  = [];
  lim = 3;

  constructor(private serviceBlog:BlogsService,private activatedRoute: ActivatedRoute,
    public loadCont: LoadingController,private Nav: NavController, private menuController:MenuController,
    private navCtrl:NavController ) { }

  ngOnInit() {
    this.id_editorial = this.activatedRoute.snapshot.paramMap.get("id");
    this.cargarListBlog();
  }

  cargarListBlog(){
    this.showLoading();
    this.serviceBlog.ListarBlogsPorEditorialApp(this.id_editorial).subscribe((data) =>{
      console.log(data)
      this.titleEdit = data[0].editorialname;
      this.blogEditorial = data[0].blogs
      this.loadCont.dismiss();
    },error => {
      console.log(error)
    })
  }

  goInfBlog(id: any) {
    this.Nav.navigateForward(`inf-ultimas/${id}`);
  }

  onIonInfinite(event) {
    setTimeout(() => {
      this.lim += 3;
      event.target.complete();
    }, 600);
  }

  async showLoading() {
    const loading = await this.loadCont.create({
      message: 'Cargando...',
      cssClass: 'custom-loading',
      //spinner:'lines-sharp'
    });

    loading.present();
  }

  abrirMenu(){
    this.menuController.open();
  }

  goBack() {
    this.navCtrl.back();
  }


}
