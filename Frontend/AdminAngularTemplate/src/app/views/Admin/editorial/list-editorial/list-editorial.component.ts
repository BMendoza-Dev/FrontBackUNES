import { Component } from '@angular/core';

@Component({
  selector: 'app-list-editorial',
  templateUrl: './list-editorial.component.html',
  styleUrls: ['./list-editorial.component.scss']
})
export class ListEditorialComponent {
  datosAsambleistas:any;
  keyword="name";
  notFound: any = "No se encuentra asambleista";
  constructor(){

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
  
}
