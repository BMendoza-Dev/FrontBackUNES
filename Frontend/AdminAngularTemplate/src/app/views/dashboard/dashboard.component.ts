import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { AdministradorService } from 'src/app/servicios/administrador.service';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  texto: string
  constructor(private administradorService: AdministradorService, public sanitizer: DomSanitizer) {
    this.texto = '<figure style="width: 50%;"><img  src = "../../../assets/img/imgAsamblea.jpg" alt = ""></figure>'
  }



  ngOnInit(): void {
    this.mostrarImg();
  }




  thumbnail: any;
  mostrarImg() {
    let id: any = localStorage.getItem('idAsambPerf');
    this.administradorService.getImg(id).subscribe((baseImage: any) => {
      //alert(JSON.stringify(data.image));

      let objectURL = 'data:image/jpeg;base64,' + baseImage;
      this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);

    });
  }

}
