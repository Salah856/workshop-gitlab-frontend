import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loading = new EventEmitter<boolean>();

  constructor() { }

  public emit() : void
  {
    this.loading.emit(false);
  }

  public event() : EventEmitter<boolean>
  {
    return this.loading;
  }
}
