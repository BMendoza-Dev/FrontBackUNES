import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import moment from 'moment';
import { BlogServicesService } from 'src/app/servicios/blog-services.service';
import { LocalProyectService } from 'src/app/servicios/local-proyect.service';
import { LoginService } from 'src/app/servicios/login.service';
import { SpinnerService } from 'src/app/servicios/spinner.service';

@Component({
  selector: 'app-list-editorial',
  templateUrl: './list-editorial.component.html',
  styleUrls: ['./list-editorial.component.scss']
})
export class ListEditorialComponent {

  notFound: any = "No se encuentra asambleista";
  search: string;
  dataTabla: any = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  editEditorial: boolean = false;
  datosEdit: any = [];
  constructor(private spinnerService: SpinnerService, private blogService: BlogServicesService, 
    public rutas: Router,private localServi: LocalProyectService) {

  }

  ngOnInit() {
    this.cargarTabla();
  }

  cargarTabla() {
    this.spinnerService.llamarSpinner();
    this.blogService.ListarEditorial().then((data: any) => {
      this.dataTabla = data.map((item:any) => {
        const date = new Date(item.created_at);
        const formattedDate = date.toLocaleDateString()
         item.created_at = formattedDate;
         return item
      });
      this.spinnerService.detenerSpinner();
    }).catch(error => {
      
    })
  }

  dataPaginate() {
    this.page = 1;
  }

  onTableDataChange(event: any) {
    this.page = event;
  }

  editarEditorial(_id: number) {
    this.spinnerService.llamarSpinner();
    this.blogService.ListarBlogsPorEditorial(_id).then((data:any) =>{
      data; 
      let datos = {
        id:data[0].id,
        editorialname:data[0].editorialname,
        editrialnum:data[0].editrialnum,
        blogs:data[0].blogs
      }
      this.datosEdit = datos;
      this.editEditorial = true;
    }).catch(error =>{
      if (error.status) { this.rutas.navigate(['/login']); }
      
    })
  }


}
