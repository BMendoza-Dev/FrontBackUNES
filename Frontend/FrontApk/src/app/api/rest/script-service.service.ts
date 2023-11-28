import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptServiceService {

  public loadScript({id, url}) {
    return new Promise((resolve, reject) => {
    if(id && document.getElementById(id)) {
        resolve({id: id, loaded: true, status: 'Already Loaded'});
    }
    let body =  document.body;
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = '';
    script.src = url;
    script.id = id;
    script.onload =() => {
        resolve({id: id, loaded: true, status: 'Loaded'});
    };
    script.onerror = (error: any) => resolve({id: id, loaded: false, status: 'Loaded'});
    script.async = true;
    script.defer = true;
    body.appendChild(script);
});
}

public removeScript(id: string) {
    
    let script = document.getElementById(id);
    if(script) {
        script.remove();
    } 
}

 loadTwitterScript(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      // Verificar si el script ya ha sido cargado
      if (document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
        resolve();
        return;
      }
  
      // Crear el elemento script
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.charset = 'utf-8';
      script.async = true;
  
      // Manejar los eventos de carga y error del script
      script.onload = () => {
        resolve();
      };
  
      script.onerror = () => {
        reject(new Error('No se pudo cargar el script de Twitter.'));
      };
  
      // Agregar el script al final del cuerpo del documento
      document.body.appendChild(script);
    });
  }
}
