import { Component, OnInit } from '@angular/core';
import { AsambleistaService } from 'src/app/servicios/asambleista.service';
import * as ClassicEditor from '../../../ckeditor 5/ckBuildD/build/ckeditor';

@Component({
  selector: 'app-form-blogs',
  templateUrl: './form-blogs.component.html',
  styleUrls: ['./form-blogs.component.scss']
})
export class FormBlogsComponent implements OnInit {

  constructor(private service:AsambleistaService){}

  datos:any = ""; public Editor:any = ClassicEditor;
  ngOnInit(): void {
    
  }

  public config = {
    toolbar: [
      'heading', '|',
        'fontfamily', 'fontsize',
        'alignment',
        'fontColor', 'fontBackgroundColor', '|',
        'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
        'link', '|',
        'bulletedList', '-', 'numberedList', 'todoList', '|',
        'code', 'codeBlock', '|',
        'insertTable', '|',
        'imageUpload', 'blockQuote', '|',
        'todoList'
        ,
        'undo', 'redo',],
    heading: {
      options: [
        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
        { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' }
      ]
    },
    codeBlock: {
      languages: [
          { language: 'html', label: 'HTML' }
      ]
  },
    image: {
      // Configure the available styles.
      styles: [
        'alignLeft', 'alignCenter', 'alignRight'
      ],

      // Configure the available image resize options.
      resizeOptions: [
        {
          name: 'resizeImage:original',
          label: 'Original',
          value: null
        },
        {
          name: 'resizeImage:25',
          label: '25%',
          value: '25'
        },
        {
          name: 'resizeImage:50',
          label: '50%',
          value: '50'
        },
        {
          name: 'resizeImage:75',
          label: '75%',
          value: '75'
        }
      ],

      // You need to configure the image toolbar, too, so it shows the new style
      // buttons as well as the resize buttons.
      toolbar: [
        'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
        '|',
        'ImageResize',
        '|',
        'toggleImageCaption',
      ]
    },
    lenguage: 'es'
  }

}
