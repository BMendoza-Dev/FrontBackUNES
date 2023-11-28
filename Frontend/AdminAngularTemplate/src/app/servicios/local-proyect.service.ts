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
  $emitter5 = new EventEmitter();
  formAsambleSource = new BehaviorSubject(null);
  formAsamble$ = this.formAsambleSource.asObservable();

  dataNotifyIdRevisarSource = new BehaviorSubject(null);
  dataNotifyIdRevisar$ = this.dataNotifyIdRevisarSource.asObservable();
  
  dataNotifyIdRechazadoAprobadoSource = new BehaviorSubject(null);
  dataNotifyIdRechazadoAprobado$ = this.dataNotifyIdRechazadoAprobadoSource.asObservable();

  editEditorialSource = new BehaviorSubject(null);
  editEditorial$ = this.editEditorialSource.asObservable();

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

  emitirEventoCatListBlogs(value:any) {
    this.$emitter5.emit(value);
  }

  userPermissions:any = {
    '/administrador_nav_1': ['super_administrador'],
    '/administrador_nav_1/admin': ['super_administrador'],
    '/administrador_nav_1/asambleistas': ['super_administrador'],
    '/administrador_nav_1/delegados': ['super_administrador'],
    '/administrador_nav_2/biografia': ['asambleista'],
    '/blogs': ['asambleista','super_administrador'],
    '/blogs/form-blogs': ['asambleista','super_administrador'],
    '/blogs/utlimas-noticias': ['super_administrador'],
    '/blogs/lista-blogs': ['asambleista','super_administrador'],
    '/admin-categoria' : ['super_administrador'],
    '/admin-categoria/form-categoria' : ['super_administrador'],
    '/form-directo': ['asambleista','super_administrador'],
  };

  hasPermission(route: any, userRole: string): boolean {
    const allowedRoles = this.userPermissions[route];
    let valor = allowedRoles.includes(userRole)
    
    return valor;
  }
 



  constructor() { }
}
