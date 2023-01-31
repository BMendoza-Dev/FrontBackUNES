import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalProyectService {
  $emitter = new EventEmitter();
  $emitter2 = new EventEmitter();
  emitirEventoTablaAsalbleista() {
    debugger
    this.$emitter.emit();
  }

  emitirEventoTablaAsistente() {
    debugger
    this.$emitter2.emit();
  }
  
  

  constructor() { }
}
