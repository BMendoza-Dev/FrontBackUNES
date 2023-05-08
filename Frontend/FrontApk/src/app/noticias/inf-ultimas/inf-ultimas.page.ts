import { Component, OnInit } from '@angular/core';
import { ScriptServiceService } from 'src/app/api/rest/script-service.service';
// import { Share, ShareOptions } from '@capacitor/share';
@Component({
  selector: 'app-inf-ultimas',
  templateUrl: './inf-ultimas.page.html',
  styleUrls: ['./inf-ultimas.page.scss'],
})
export class InfUltimasPage implements OnInit {

  constructor(private scriptService: ScriptServiceService) { }

  ngOnInit() {
    
    this.scriptService.loadScript({ id: 'twitter', url: 'https://platform.twitter.com/widgets.js' })
        .then(data => {
          console.log('script loaded ', data);
        }).catch(error => console.log(error));
  }

  ngOndestroy(){
    this.scriptService.removeScript('twitter');
  }

  // async share() {
  //   const shareOptions: ShareOptions = {
  //     title: 'Mi título',
  //     text: 'Mi texto',
  //     url: 'http://localhost:8100/inf-ultimas',
  //     dialogTitle: 'Compartir con...'
  //   };

  //   try {
  //     const result = await Share.share(shareOptions);
  //     console.log('Compartido con éxito', result);
  //   } catch (error) {
  //     console.error('Error al compartir', error);
  //   }
  // }

}
