import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
import { BlogsService } from 'src/app/api/rest/blogs.service';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.page.html',
  styleUrls: ['./editorial.page.scss'],
})
export class EditorialPage implements OnInit {
  editorialList: any = [];
  lim = 3;

  constructor(private serviceBlog: BlogsService, private sanitizer: DomSanitizer,private Nav: NavController) { }

  ngOnInit() {
    this.ListarEditorialApp();
  }

  ListarEditorialApp() {
    this.serviceBlog.ListarEditorialApp().subscribe((data: any) => {
      console.log(data)
      this.editorialList = data.map((item: any) => {
        let blogs: any = [];

        blogs = item['blogs'].map((itemBlob: any) => {
          // let objectURL = 'data:image/jpeg;base64,' + item.imagen;
          // let thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
          let lisBlog: any = [];
          return lisBlog = {
            blogtitulo: itemBlob.blogtitulo,
            blogdescripcion: itemBlob.blogdescripcion,
            categorianame: itemBlob.categorianame
          }
        })

        return data = {
          editorialname: item.editorialname,
          id: item.id,
          blogs: blogs
        }
      });
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
      this.lim += 3;
      event.target.complete();
    }, 600);
  }

  goInfEdit(id: any) {
    this.Nav.navigateForward(`inf-editorial/${id}`);
  }

  // currentFood = undefined;

  // foods = [
  //   {
  //     id: 1,
  //     name: 'Apples',
  //     type: 'fruit',
  //   },
  //   {
  //     id: 2,
  //     name: 'Carrots',
  //     type: 'vegetable',
  //   },
  //   {
  //     id: 3,
  //     name: 'Cupcakes',
  //     type: 'dessert',
  //   },
  //   {
  //     id: 3,
  //     name: 'Cupcakes',
  //     type: 'dessert',
  //   },
  //   {
  //     id: 3,
  //     name: 'Cupcakes',
  //     type: 'dessert',
  //   },
  //   {
  //     id: 3,
  //     name: 'Cupcakes',
  //     type: 'dessert',
  //   },
  // ];

  // compareWith(o1, o2) {
  //   if (!o1 || !o2) {
  //     return o1 === o2;
  //   }

  //   if (Array.isArray(o2)) {
  //     return o2.some((o) => o.id === o1.id);
  //   }

  //   return o1.id === o2.id;
  // }

  // handleChange(ev) {
  //   this.currentFood = ev.target.value;
  // }

}
