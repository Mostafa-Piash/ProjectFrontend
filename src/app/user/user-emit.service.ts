import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserEmitService {
  emitAddPanel: EventEmitter<any>;
  emitUserPanel: EventEmitter<any>;
  emitEditPanel: EventEmitter<any>;
  constructor() { 
    this.emitAddPanel = new EventEmitter<any>();
    this.emitUserPanel = new EventEmitter<any>();
    this.emitEditPanel = new EventEmitter<any>();
  }
  notifyAddPanel(data){
    this.emitAddPanel.emit(data);
  }
  notifyUserPanel(data){
    this.emitUserPanel.emit(data);
  }
  notifyEditPanel(data){
    this.emitEditPanel.emit(data);
  }
}
