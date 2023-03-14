import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalProyectService {
  $emitter = new EventEmitter();
  $emitter2 = new EventEmitter();
  $emitter3 = new EventEmitter();
  $emitter4 = new EventEmitter();
  formAsambleSource = new BehaviorSubject(null);
  formAsamble$ = this.formAsambleSource.asObservable();
  emitirEventoTablaAsalbleista() {
    this.$emitter.emit();
  }

  emitirEventoTablaAsistente() {
    this.$emitter2.emit();
  }

  emitirEventoTablaAdministrador() {
    this.$emitter3.emit();
  }

  emitirEventoListBlogs() {
    this.$emitter4.emit();
  }



  constructor() { }
}
