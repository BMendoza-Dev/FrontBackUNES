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
  constructor(private administradorService:AdministradorService, private sanitizer: DomSanitizer) {
  }

  

  ngOnInit(): void {
    this.mostrarImg();
  }


 
  thumbnail: any;
  mostrarImg(){
    debugger
    this.administradorService.getImg().subscribe((baseImage : any) => {
      //alert(JSON.stringify(data.image));
      debugger
      let objectURL = 'data:image/jpeg;base64,' + baseImage;
      debugger

       this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        debugger
    });
  }

}
