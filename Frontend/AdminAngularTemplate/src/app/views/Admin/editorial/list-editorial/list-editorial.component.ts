import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-list-editorial',
  templateUrl: './list-editorial.component.html',
  styleUrls: ['./list-editorial.component.scss']
})
export class ListEditorialComponent {
  datosAsambleistas:any;
  keyword="name";
  notFound: any = "No se encuentra asambleista";
  pdfUrl: string;
  constructor(private service:LoginService, private http: HttpClient){
    
  }
  ngOnInit(){
    
  }

  selectEvent(item: any) {

  }

  onFocused(item:any){

  }

  onClear(){

  }

  pdfs: File[] = [];

  selectPdf() {
    const input = document.querySelector('input[type=file]') as HTMLInputElement;
    input.click();
  }
  

  uploadPdf(event: Event) {
    const input = event.target as HTMLInputElement;
    const files = input.files;

    if (files && files.length) {
      for (let i = 0; i < files.length; i++) {
        this.pdfs.push(files[i]);
      }
    }
    console.log(this.pdfs)
  }

  get pdfCount() {
    return this.pdfs.length;
  }

  onFileSelected(event:any) {
    const file = event.target.files[0];
    this.pdfs.push(file);
  }


  obtenerPdf() {
    const httpheaders = new HttpHeaders({
      'Content-Type': 'application/pdf'
    });
    
    this.http.get('https://rc5appmobile.tech/api/pruevapdf?id=2&num=0', {headers:httpheaders,responseType: 'blob' })
      .subscribe((blob: Blob) => {
        // crea un objeto de tipo Blob con la respuesta
        // y lo convierte a una URL segura para el PDF
        this.pdfUrl = URL.createObjectURL(blob);
        debugger
      });
  }
  
}
