import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-votos-asambleista',
  templateUrl: './votos-asambleista.page.html',
  styleUrls: ['./votos-asambleista.page.scss'],
})
export class VotosAsambleistaPage implements OnInit {
  id_perfil: any; 
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id_perfil = this.activatedRoute.snapshot.paramMap.get("id");
  }

}
