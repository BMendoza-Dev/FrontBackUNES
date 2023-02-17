import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalProyectService {
  $emitter = new EventEmitter();
  $emitter2 = new EventEmitter();
  formAsambleSource = new BehaviorSubject(null);
  formAsamble$ = this.formAsambleSource.asObservable();
  emitirEventoTablaAsalbleista() {
    this.$emitter.emit();
  }

  emitirEventoTablaAsistente() {
    this.$emitter2.emit();
  }



  constructor() { }
}
