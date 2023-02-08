import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalProyectService {
  $emitter = new EventEmitter();
  $emitter2 = new EventEmitter();
  emitirEventoTablaAsalbleista() {
    
    this.$emitter.emit();
  }

  emitirEventoTablaAsistente() {
    
    this.$emitter2.emit();
  }
  
  

  constructor() { }
}
