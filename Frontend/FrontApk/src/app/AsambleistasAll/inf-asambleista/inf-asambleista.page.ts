import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inf-asambleista',
  templateUrl: './inf-asambleista.page.html',
  styleUrls: ['./inf-asambleista.page.scss'],
})
export class InfAsambleistaPage implements OnInit {
  id: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("id",this.id);
  }

}
