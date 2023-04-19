import { Component, OnInit } from '@angular/core';
import { ScriptServiceService } from 'src/app/api/rest/script-service.service';

@Component({
  selector: 'app-inf-ultimas',
  templateUrl: './inf-ultimas.page.html',
  styleUrls: ['./inf-ultimas.page.scss'],
})
export class InfUltimasPage implements OnInit {

  constructor(private scriptService: ScriptServiceService) { }

  ngOnInit() {
    debugger
    this.scriptService.loadScript({ id: 'twitter', url: 'https://platform.twitter.com/widgets.js' })
        .then(data => {
          console.log('script loaded ', data);
        }).catch(error => console.log(error));
  }

  ngOndestroy(){
    this.scriptService.removeScript('twitter');
  }

}
