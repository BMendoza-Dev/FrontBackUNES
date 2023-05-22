import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BlogsService } from 'src/app/api/rest/blogs.service';

@Component({
  selector: 'app-mas-leido',
  templateUrl: './mas-leido.page.html',
  styleUrls: ['./mas-leido.page.scss'],
})


export class MasLeidoPage implements OnInit {

  blogTop:any = []
  lim:number = 5;

  constructor(private Nav:NavController,private service:BlogsService) { }

  ngOnInit() {
    this.cargarTopList();
  }

  cargarTopList(){
    this.service.obtenerBlogsByVisitorsCount().subscribe((data:object) => {
      console.log(data)
      this.blogTop = data;
    })
  }

  goInfBlog(id: any) {
    this.Nav.navigateForward(`inf-ultimas/${id}`);
  }

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
      this.cargarTopList();
    }, 2000);
  };

  onIonInfinite(event) {
    
    setTimeout(() => {
      this.lim += 5;
      event.target.complete();
    }, 600);
  }

}
