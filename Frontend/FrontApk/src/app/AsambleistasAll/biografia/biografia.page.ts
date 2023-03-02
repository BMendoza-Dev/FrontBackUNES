import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfilAsamService } from 'src/app/api/rest/perfil-asam.service';
import { ViewEncapsulation } from '@angular/core'
import { DomSanitizer,SafeHtml  } from '@angular/platform-browser';

@Component({
  selector: 'app-biografia',
  templateUrl: './biografia.page.html',
  styleUrls: ['./biografia.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BiografiaPage implements OnInit {
  id_perfil: string;
  peril: SafeHtml;

  constructor(private sanitizer: DomSanitizer ,private activatedRoute: ActivatedRoute, private rest:PerfilAsamService) { }

  ngOnInit() {
    this.id_perfil = this.activatedRoute.snapshot.paramMap.get("id");
    this.getBiografia();
  }
  

  getBiografia(){
    this.rest.getBiografiaAssam(this.id_perfil).subscribe((data:any) =>{
      data;
      this.peril = this.sanitizer.bypassSecurityTrustHtml(data.perfil);
    },error => (console.log(error)))
  }

  
}
